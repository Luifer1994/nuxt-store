import type { Avatar, Button, Notification, NotificationAction } from '@nuxt/ui'

export interface Toast {
  add: (notification: Partial<Notification>) => { 
    id: string;
    title?: string;
    description?: string;
    icon?: string;
    avatar?: Avatar;
    closeButton?: Button;
    timeout?: number;
    actions?: NotificationAction[];
    click?: Function;
    callback?: Function;
    color?: any;
    ui?: any;
  };
  remove: (id: string) => void;
  update: (id: string, notification: Partial<Notification>) => void;
  clear: () => void;
}
