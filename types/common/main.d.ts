interface IPages {
    content: IPagesContent[];
    icon: string;
    title: string;
    url: string;
  } 

interface IPagesContent {
    type: string;
    title: string;
    posts:IPost[];
    properties: {
      categories: string[]
    };
}

interface IPost {
  title: string,
  category: string,
  content: IContentPostImage[]
}

interface IContentPostImage {
  link:string
}