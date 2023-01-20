class UserInfo {
    constructor(userName, userJob) {
        this._userName = userName;
        this._userJob = userJob;
    }

    //получение значений
    getUserInfo() {
        const userInformation = {
            name: this._userName.textContent,
            job: this._userJob.textContent
        };

        return userInformation;
    }

    //присваивание значений 
    setUserInfo(name, job) {
        this._userName.textContent = name;
        this._userJob.textContent = job;
    }
};

export default UserInfo;