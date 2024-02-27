// LICENSE is MIT
//
// Copyright (c) 2023
//



interface Window {
    uuid(format?: string): string;
}

interface String {
    base64(): string;

    colorRgba(): {R: number; G: number; B: number; A: number};

    cut(len: number, ellipsis?: string): string;

    uuid(): string;
}

interface Location {
    query(name: string, defaultValue?:any): string;
}

interface Number {
    toDate(): Date;
}

interface DateConstructor {
    DAYS: number;
    HOURS: number;
    MINUTES: number;
    SECONDS: number;
    MILLISECONDS: number;

    newDate(noTime?:boolean): Date;
    unixTime(): number;
}
interface Date {
    localeTimeString(style?: "full" | "long" | "medium" | "short" | undefined): string;
    localeDateString(style?: "full" | "long" | "medium" | "short" | undefined): string;

}
