import {
  ConflictException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from '../users/schema/user.schema';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { SignUpDto } from './dto/signup.dto';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name)
    private userModel: Model<UserDocument>,
    private jwtService: JwtService,
  ) {}

  async signUp(signUpDto: SignUpDto): Promise<{ access_token: string }> {
    const { name, password } = signUpDto;
    const email = signUpDto.email.toLowerCase();

    const hashedPassword = await bcrypt.hash(password, 10);
    try {
      const user = await this.userModel.create({
        name,
        email,
        password: hashedPassword,
        role: 'user', // only one role here
      });

      const token = this.jwtService.sign({
        id: user._id,
        email: user.email,
        role: user.role,
      });

      return { access_token: token };
    } catch (error: unknown) {
      if (
        error &&
        typeof error === 'object' &&
        'code' in error &&
        error.code === 11000
      ) {
        throw new ConflictException('Duplicate email entered!');
      }
      throw error;
    }
  }

  async login(loginDto: LoginDto): Promise<{ access_token: string }> {
    const email = loginDto.email.toLowerCase();
    const { password } = loginDto;

    const user = await this.userModel
      .findOne({
        email: { $regex: new RegExp(`^${email}$`, 'i') },
      })
      .select('+password')
      .exec();
    if (!user) throw new UnauthorizedException('Invalid credentials!');

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid)
      throw new UnauthorizedException('Invalid credentials!');

    const token = this.jwtService.sign({
      id: (user as UserDocument)._id,
      email: (user as UserDocument).email,
      role: (user as UserDocument).role,
    });

    return { access_token: token };
  }
}
