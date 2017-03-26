class Controller {
    static sendWoof(session: any): void {
        return session
            .send('woof')
            .endDialog();
    }
}

export default Controller;
