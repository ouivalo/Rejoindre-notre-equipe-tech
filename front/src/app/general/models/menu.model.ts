import { QueryParamsHandling } from '@angular/router';

// Interface créée par primeng à custom pour nous.
export class MenuItem {
    label: string;
    icon?: string;
    command?: (event?: any) => void;
    url?: string;
    items?: MenuItem[];
    expanded?: boolean;
    disabled?: boolean;
    style?: any;
    id?: string;
    routerLink?: any;
    iconClass?: string;
    state?: {
        [k: string]: any;
    };
}
