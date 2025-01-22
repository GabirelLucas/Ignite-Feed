import * as Dialog from "@radix-ui/react-dialog"
import { Content, Description, Overlay, TitleModal, WrapperButtons } from "./style"
import { Button } from "../../atoms/button"

interface ModalProps {
    deleteComment : (commentDelet : string) => void,
    contentDeleted : string
}


export function DeleteCommentModal ({deleteComment, contentDeleted} : ModalProps) {

    function callbackHandleDeleteComment (content : string) {
        deleteComment(content)
    }


    return(
        <Dialog.Portal>
            <Overlay/>
            <Content>
				<TitleModal>
                    Excluir Comentário
                </TitleModal>
				<Description>
                    Você tem certeza que gostaria de excluir este comentário?
                </Description>
                <WrapperButtons>
                    <Dialog.Close asChild>
                        <Button $variant="modalPrimary">
                            Cancelar
                        </Button>
                    </Dialog.Close>
                    <Dialog.Close asChild>
                        <Button $variant="modalSecondary"  onClick={() => callbackHandleDeleteComment(contentDeleted)}>
                            Sim, excluir
                        </Button>
                    </Dialog.Close>
                    
                    
                   
                </WrapperButtons>
			</Content>
        </Dialog.Portal>
    )
    
}