import {default as example1Html} from '!!raw-loader!./examples/1/index.html';
import {default as example1Ts} from '!!raw-loader!./examples/1/index.ts';

import {default as exampleImportModule} from '!!raw-loader!./examples/import/import-module.txt';
import {default as exampleInsertTemplate} from '!!raw-loader!./examples/import/insert-template.txt';

import {Component, Inject} from '@angular/core';
import {TuiNotification} from '@taiga-ui/core';
import {changeDetection} from '../../../change-detection-strategy';
import {LogService} from '../../app/log.service';
import {FrontEndExample} from '../../interfaces/front-end-example';

@Component({
    selector: 'example-notification',
    templateUrl: './notification.template.html',
    changeDetection,
    providers: [LogService],
})
export class ExampleTuiNotificationComponent {
    readonly exampleImportModule = exampleImportModule;
    readonly exampleInsertTemplate = exampleInsertTemplate;

    readonly example1: FrontEndExample = {
        TypeScript: example1Ts,
        HTML: example1Html,
    };

    hasIcon = true;

    readonly statusVariants: ReadonlyArray<TuiNotification> = [
        TuiNotification.Info,
        TuiNotification.Error,
        TuiNotification.Warning,
        TuiNotification.Success,
    ];

    status = this.statusVariants[0];

    constructor(@Inject(LogService) private readonly log: LogService) {}

    onClose() {
        this.log.event('close', null);
    }
}
