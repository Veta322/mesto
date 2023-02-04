class UserInfo {
    constructor({ id, userName, userJob, userAvatar }) {
        this._id = id;
        this._userName = userName;
        this._userJob = userJob;
        this._userAvatar = userAvatar;
    }

    //получение значений
    getUserInfo() {
        const userInformation = {
            _id: this._id,
            avatar: this._userAvatar.src,
            name: this._userName.textContent,
            about: this._userJob.textContent 
        };

        return userInformation;
    }


    //присваивание значений 
    setUserInfo(id, name, about, avatar) {
        this._id = id;
        this._userName.textContent = name;
        this._userJob.textContent = about;
        this._userAvatar.src = avatar
    }
};

export default UserInfo;