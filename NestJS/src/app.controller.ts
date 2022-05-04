import {
  Body,
  Controller,
  Get,
  Headers,
  HostParam,
  HttpCode,
  Ip,
  Param,
  Post,
  Query,
  Redirect,
  Req,
  Res,
} from '@nestjs/common';
import { Request, RequestParamHandler, Response } from 'express';
import { AppService } from './app.service';

export class CreateUserDto {
  email: string;
  password: string;
}

@Controller('api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('hello')
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('object')
  getObject(
    @Headers() headers,
    @Ip() ip,
    @HostParam() HostParam,
  ): { text: string; age: number } {
    console.log(headers);
    console.log(ip);
    console.log(HostParam); // https://docs.nestjs.com/controllers#sub-domain-routing
    return { text: 'Bye', age: 12 };
  } // res content-type is application-json

  @Get('array/:idx')
  getArray(
    @Param('idx') idx: number,
    @Query('elem') elem: number,
  ): string | number {
    const array = [
      [1, 2],
      ['a', 'b'],
    ];
    return array[idx][elem];
  } // res content-type is application-json

  @Get('welcome')
  @HttpCode(201)
  getWelcome(): string {
    return 'Welcome';
  } // res content-type is text/html

  @Get('res-obj')
  useResObj(@Res() response: Response) {
    const obj = {
      name: 'Alice',
      age: 15,
    };
    response.json({ data: obj }); // native response handling
    // use {passthrough: true} to use res and next together
    // https://docs.nestjs.com/controllers#request-payloads
  }

  @Post('user')
  createUser(
    @Req() request: Request,
    @Body() user: CreateUserDto,
  ): CreateUserDto {
    // FIXME: Add validation. Passing other key values also works for now. eg. email1 instead of email
    // https://docs.nestjs.com/techniques/validation#stripping-properties

    // const user:CreateUserDto = request.body

    const { email, password } = user;
    console.log({ email, password });
    return user;
  }

  // TODO: checkout @All decorator

  @Get('some-old-endpoint')
  @Redirect('welcome', 301)
  redirectUser() {}
}
