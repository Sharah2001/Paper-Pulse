import { IsString, IsNotEmpty, IsEmail, MinLength } from 'class-validator';

export class LoginDto {
  @IsString()
  @IsEmail({}, { message: 'please enter a valid email address!' })
  readonly email!: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(6)
  readonly password!: string;
}
