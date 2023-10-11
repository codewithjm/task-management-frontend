import * as Yup from 'yup';

export const createTaskFormSchema = Yup.object({
    title: Yup.string().required('title is required')
                .max(150, "Maximum of 150 characters only"),
    level : Yup.number().required("level is required"),
    dueDate : Yup.string().required("Due date is required"),
});