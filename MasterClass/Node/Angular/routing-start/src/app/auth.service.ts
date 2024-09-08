export class AuthService{

    logged = false
    authenticated(){

        const promise = new Promise(
            (resolve, reject)=>{
                setTimeout(()=>{
                    resolve(this.logged);
                }, 800)
            })

        return promise;

    }

    login(){
        this.logged = true;
    }

    logout(){
        this.logged  = false;
    }
}