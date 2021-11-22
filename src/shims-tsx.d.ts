import Vue, { VNode } from "vue";

declare global {
  namespace JSX {
    // tslint:disable no-empty-interface
    interface Element extends VNode {}
    // tslint:disable no-empty-interface
    interface ElementClass extends Vue {}
    interface IntrinsicElements {
      [elem: string]: any;
    }
    interface PostResponse {
      id: string;
      title: string;
      content: string;
      createdAt?: Date;
      updatedAt?: Date;
      user: UserResponse;
    }
    interface UserResponse {
      id: string;
      username: string;
      firstName: string;
      lastName: string;
      bio?: string;
      profilePicture?: string;
      country?: string;
      birthDate?: Date;
      email?: string;
      createdAt?: Date;
      updatedAt?: Date;
    }
  }
}
