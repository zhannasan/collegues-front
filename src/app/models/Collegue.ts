class Collegue{
  constructor(
    public matricule:string,
    public nom: string,
    public prenoms: string,
    private _email: string,
    public dateDeNaissance: Date,
    public photoUrl: string
    ){
    }
    get email():string{
      return this._email;
    }
    set email(newEmail:string){
      this.email = newEmail;
    }
}
export {Collegue};
