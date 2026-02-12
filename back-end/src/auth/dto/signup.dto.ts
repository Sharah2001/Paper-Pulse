import { IsString, IsNotEmpty, IsEmail, MinLength } from 'class-validator';

export class SignUpDto {
  @IsString()
  @IsNotEmpty()
  readonly name!: string;

  @IsString()
  @IsEmail({}, { message: 'please enter a valid email address!' })
  readonly email!: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(6)
  readonly password!: string;
}
