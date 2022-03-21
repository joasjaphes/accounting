import { Controller, Post, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '../auth/auth.guard';

@Controller('transaction')
export class TransactionController {
    @Post('/add')
    @UseGuards(AuthGuard)
    addTransaction(@Req() request) {
        // console.log('Request', request.headers);
        return 'Added'
    }
}
