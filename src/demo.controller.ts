import { Controller, Get } from '@nestjs/common';

@Controller()
export class DemoController {
  @Get('health')
  getHealth(): { status: string } {
    return { status: 'ok' };
  }

  @Get('boom')
  getBoom(): string {
    throw new Error('Deliberate synchronous failure from /boom');
  }

  @Get('boom-async')
  async getBoomAsync(): Promise<string> {
    await this.loadSomething();
    throw new Error('Deliberate asynchronous failure from /boom-async');
  }

  private async loadSomething(): Promise<void> {
    await new Promise((resolve) => setTimeout(resolve, 10));
  }
}
