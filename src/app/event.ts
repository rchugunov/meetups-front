export class Event {
  id: number;
  time: string;
  clubName: string;
  title: string;
  description: string;

  constructor(id: number,
              time?: string,
              clubName?: string,
              title?: string,
              description?: string) {
    this.id = id;
    this.time = time;
    this.clubName = clubName;
    this.title = title;
    this.description = description;
  }
}
