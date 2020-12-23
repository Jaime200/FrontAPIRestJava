export class TvShowModel {
    public score: number
    public show: Show
}


class Show {
    name:string
    language:string
    image:Image
}

class Image {
    medium:string
    original:string
}