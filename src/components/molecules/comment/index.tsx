import { ThumbsUp, Trash } from "phosphor-react";
import { Avatar } from "../../atoms/avatar";
import { Button } from "../../atoms/button";
import { UserName } from "../../atoms/userName";
import { CommentBox, CommentContainer, CommentContent, CommentHeader, CommentText, DateOfPublication } from "./style";
import * as Dialog from "@radix-ui/react-dialog";
import { DeleteCommentModal } from "../deleteCommentModal";
import { useState } from "react";



interface CommentProps {
    comment : string,
    deleteComment : (commentDelet : string) => void
}


export function Comment ({comment, deleteComment}: CommentProps) {

    const [likeCounter, setLikeCounter] = useState(0)
    function handleLikeCounter () {
        
        setLikeCounter((state) => state + 1)
        
    }

    return (
        <CommentContainer>
            <Avatar userFoto="https://avatars.githubusercontent.com/u/2254731?v=4" />
            <CommentBox>
                <CommentContent>
                    <CommentHeader>
                        <div>
                            <UserName nome="Diego"/>
                            <DateOfPublication>cerca de 2h</DateOfPublication>
                        </div>
                        <Dialog.Root>
                            <Dialog.Trigger asChild>
                                <Button $variant="danger"  /*onClick={() => callbackHandleDeleteComment(comment)}*/>
                                    <Trash size={24} />
                                </Button>
                            </Dialog.Trigger>
                            <DeleteCommentModal deleteComment={deleteComment} contentDeleted={comment}/>
                        </Dialog.Root>
                        
                    </CommentHeader>
                    <CommentText>{comment}</CommentText>
                </CommentContent>
                <Button $variant="isLiked" hasIcon onClick={handleLikeCounter}>
                    <ThumbsUp size={24}  />
                    Aplaudir &middot; {likeCounter}
                </Button>
            </CommentBox>
            
        </CommentContainer>
    )
}