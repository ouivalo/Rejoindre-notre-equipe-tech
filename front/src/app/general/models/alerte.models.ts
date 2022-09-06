export interface Alerte {
  id: number;
  alerte: {
    id: number;
    description:	string;
    alerte_auto:	{
      action_url: string;
      titre: string;
      description: string;
    };
    date_envoi: string;
    date_vue:	string;
  }
}
