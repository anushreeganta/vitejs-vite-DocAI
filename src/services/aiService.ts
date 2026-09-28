import type {UploadedDocumnet} from '../types/document'


export async function getAIResponse(question: string,
  document: UploadedDocumnet){
    await new Promise((resolve) => setTimeout(resolve,800));

    return "Im fake AI response";

}
