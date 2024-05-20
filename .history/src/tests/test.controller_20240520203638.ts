import { Controller } from "@nestjs/common"

@Controller('users')
export class userController () {
    constructor (private readonly userService : UserService )
}

