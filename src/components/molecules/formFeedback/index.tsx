import { FeedbackInput } from "../../atoms/feedback";
import { Button } from "../../atoms/button";
import { ContainerButton, FormFeedbackWrapper, FormTitle } from "./style";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Comment } from "../comment";
import { useState } from "react";

const commentFormValidation = z.object({
    comment : z.string().trim().min(1, "O comentário não pode estar vazio")
})

type DataOfCommentForm = z.infer<typeof commentFormValidation>



export function FormFeedback () {

    const [listOfComments, setListOfComments] = useState<string[]>([])

    const {handleSubmit, register, reset} = useForm<DataOfCommentForm>({
        resolver : zodResolver(commentFormValidation)
    })

    function handleNewComment (data : DataOfCommentForm) {
        setListOfComments((state) => [...state, data.comment])
        reset()
    }

    function handleDeleteCommentOfList (commentContent : string) {
        const updatedComments = [...listOfComments];
        const indexOfCommentDelete = updatedComments.lastIndexOf(commentContent);
        if (indexOfCommentDelete !== -1) {
            updatedComments.splice(indexOfCommentDelete, 1);
            setListOfComments(updatedComments);
        }
    }


    return (
        <>
            <FormFeedbackWrapper onSubmit={handleSubmit(handleNewComment)}>
                <FormTitle>Deixe seu comentário</FormTitle>
                <FeedbackInput placeholder="Escreva um comentário" {...register('comment')}/>
                <ContainerButton>
                <Button type="submit" $variant="primary">
                        Publicar
                    </Button>
                </ContainerButton>
                
            </FormFeedbackWrapper>
            
            {listOfComments.map((commentContent, index) => {
                return(
                    
                    <Comment key={index} comment={commentContent} deleteComment={() => handleDeleteCommentOfList(commentContent)}/>
                )
            })}
        </>
        
    )
}