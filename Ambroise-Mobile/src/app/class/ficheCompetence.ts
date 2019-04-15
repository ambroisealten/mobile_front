export class ficheCompetence {
      id: String;
      NameOfFiche: String;
      NomPersonne: String;
      PrenomPersonne: String;
      StatutPersonne: String;
      DiplomeFiche: String;
      EmployeurFiche: String;
      metierFiche: String;
      DisponibiliteFiche: String;
      AnneediplomeFiche: String;
      SalaireFiche: String;
      AvisFiche: String;
      CommentaireFiche: String;

    constructor(fiche) {
        this.id = fiche.id;
        this.NameOfFiche = fiche.NameOfFiche;
        this.NomPersonne = fiche.NomPersonne;
        this.PrenomPersonne = fiche.PrenomPersonne;
        this.StatutPersonne = fiche.StatutPersonne;
        this.DiplomeFiche = fiche.DiplomeFiche;
        this.EmployeurFiche = fiche.EmployeurFiche;
        this.metierFiche = fiche.metierFiche;
        this.DisponibiliteFiche = fiche.DisponibiliteFiche;
        this.AnneediplomeFiche = fiche.AnneediplomeFiche;
        this.SalaireFiche = fiche.SalaireFiche;
        this.AvisFiche = fiche.AvisFiche;
        this.CommentaireFiche = fiche.CommentaireFiche;
    }
}
