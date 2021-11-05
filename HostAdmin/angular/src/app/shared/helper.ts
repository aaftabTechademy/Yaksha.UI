export class Helper {
    static secondsToHm(value: number) {
        let seconds = Number(value);
        let hour = Math.floor(seconds / 3600);
        let minutes = Math.floor(seconds % 3600 / 60);
        return `${hour}h ${minutes}m`;
    }

    static sortString(value: string) {
        return function (a: string, b: string) {
            const aValue = a[value].toLowerCase();
            const bValue = b[value].toLowerCase();
            if (aValue > bValue) return 1;
            if (aValue < bValue) return -1;
            return 0;
        }
    }

    static sortNumber(value: string) {
        return function (a: number, b: number) {
            if (a[value] > b[value]) return 1;
            if (a[value] < b[value]) return -1;
            return 0;
        }
    }

    static convertUTCDateToLocalDate(dateString: string): Date {
        if (dateString) {
            var utcDate = new Date(dateString.split('+')[0]);
            return new Date(utcDate.getTime() - utcDate.getTimezoneOffset() * 60 * 1000);
        }
        return null;
    }

    static getTimeZone() {
        return /\((.*)\)/.exec(new Date().toString())[1];
    }

    static getFormattedDate(date) {
        let year = date.getFullYear();
        let month = (1 + date.getMonth()).toString().padStart(2, '0');
        let day = date.getDate().toString().padStart(2, '0');
        return month + '/' + day + '/' + year;
    }

    static getStaticProfileImage(name, surname) {
        return name?.slice(0, 1) + surname?.slice(0, 1);
    }

    static getChatDateAndTime(date) {
        date = this.convertUTCDateToLocalDate(date);
        if ((new Date().getDate() - new Date(date).getDate()) === 0)
            return new Date(date).toLocaleTimeString().replace(/:\d+ /, ' ');
        else if ((new Date().getDate() - new Date(date).getDate()) === 1)
            return "Yesterday";
        else if ((new Date().getDate() - new Date(date).getDate()) > 1)
            return new Date(date).toLocaleDateString();
    }

    static getFormattedTime(date) {
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let AmOrPm = hours >= 12 ? 'PM' : 'AM';
        hours = (hours % 12) || 12;
        hours = hours <= 9 ? `0${hours}` : hours;
        minutes = minutes < 30 ? "00" : "30";
        return `${hours}:${minutes} ${AmOrPm}`;
    }

}