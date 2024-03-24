import React from "react";

interface Props {
  params: { id: number; photoId: number };
}
const UserPhotosPage = (props: Props) => {
  return <div>UserPhotosPage {props.params.id} for photo Id {props.params.photoId}</div>;
};

export default UserPhotosPage;
