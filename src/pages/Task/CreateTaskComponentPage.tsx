
import './CreateTaskComponentPage.scss';
import HeaderAtomGC from "../../global-components/Atoms/HeaderAtomGC.tsx";
import { Formik, Field, Form, ErrorMessage } from 'formik';
import {createTaskFormSchema} from "../../core/schema/CreateTaskFormSchema.ts";
import React, {useEffect, useState} from "react";
import ButtonAtomGC from "../../global-components/Atoms/ButtonAtomGC.tsx";
import {LevelEnum} from "../../commons/enums/LevelEnum.ts";
import {Link, useNavigate } from "react-router-dom";
import TaskRepository from "../../repository/task/TaskRepository.ts";
import {IPostModel} from "../../repository/base/RepositoryBase.ts";
import SelectMultiUserMoleculeGC, {
    SelectMultiUserMoleculeGCModel
} from "../../global-components/Molecules/SelectMultiUserMoleculeGC.tsx";
import UserRepository from "../../repository/user/UserRepository.ts";

interface formModel {
    title : string;
    body: string;
    level : number| null;
    dueDate : string;
    developers : number[];
}

interface formStatusModel {
    isSubmit : boolean;

}

const CreateTaskComponentPage = () => {


    const [getFormValues,setFormValues] = useState<formModel>({
        title : '',
        body : '',
        level : null,
        dueDate : '',
        developers: []
    });

    const [formStatus, setFormStatus] = useState<formStatusModel>({
        isSubmit : false
    });

    const [userSelection, setUserSelection] = useState<SelectMultiUserMoleculeGCModel[]>([]);

    useEffect(() => {
        const usrRepo = new UserRepository();
        usrRepo.getRequest({url: '/User'}).then(response => {
            const {data} = response;
            setUserSelection(data.map(dt => {
                const tmps : SelectMultiUserMoleculeGCModel = {
                    id : dt.id,
                    img : dt.imG_PATH,
                    name : `${dt.firsT_NAME} ${dt.lasT_NAME}`,
                    position : dt.position,
                    isActive : false
                };
                return tmps;
            }))

            console.log(data);
        }).catch(err => {
            console.log(err);
        })

    }, []);

    const selectDev = (id : number) => {
        const slc = userSelection.filter(x => x.id === id);
        slc[0].isActive = !slc[0].isActive;
        const tmp = userSelection.filter(x => x.id !== id);;
        setUserSelection([
            ...tmp,
            ...slc
        ]);
    }


    const navigate  = useNavigate();


    const submitOpenTicket : React.FC<formModel> = (data) => {
        const repo = new TaskRepository();

        const config :IPostModel = {
            url :"/Task",
            data : {
                task_title : data.title,
                body : data.body,
                task_level : data.level,
                due_date : data.dueDate,
                requestor_ident : 3,
                developers : userSelection.filter(x => x.isActive).map(z => z.id)
            }
        }

        repo.postRequest(config).then((response) => {
            console.log(response);
            alert("Successfuly submit open ticket");
            navigate('/');
        }).catch(err => {
            console.log(err);
        });
    }

    const formOnSubmit = (values : formModel) : void => {
        setFormStatus({
            ...formStatus,
            isSubmit : true
        });
        setFormValues(values);

        if(!confirm("Do you really want to submit ticket?")){
            return;
        }
        submitOpenTicket(values);
    }


    return (<div className="CreateTaskComponentPage">
                <HeaderAtomGC size={2} text="Create Task" className={"content-title"} events={{}} attributes={{}} />
                <div className="form-container">
                    <br/>
                    <Formik
                        initialValues={getFormValues}
                        validationSchema={createTaskFormSchema}
                        onSubmit={formOnSubmit}>
                        {
                            (formikProps) => (
                                <Form>
                                    <div className="input-group">
                                        <label htmlFor="title">Title</label>
                                        <Field type="text" id="title" name="title"
                                               className={`${(formikProps.errors.title) ? 'error' : ''}`}/>
                                        <ErrorMessage name="title" component="small" />
                                    </div>
                                    <div className="input-group">
                                        <label htmlFor="description">Description</label>
                                        <Field as="textarea" // Use "as" prop to specify the input type
                                               id="body"
                                               name="body"
                                               row={5}
                                               className={`${formikProps.errors.body ? 'error' : ''}`}
                                        />
                                        <ErrorMessage name="body" component="small" />
                                    </div>
                                    <div className="input-group">
                                        <label htmlFor="level">Status</label>
                                        <Field as="select" id="level" name="level"
                                               className={`${formikProps.errors.level ? 'error' : ''}`} >
                                            <option label="Select an level"/>
                                            <option value={LevelEnum.Critical} label={LevelEnum[LevelEnum.Critical]} />
                                            <option value={LevelEnum.HighPriority} label={LevelEnum[LevelEnum.HighPriority]} />
                                            <option value={LevelEnum.MediumPriority} label={LevelEnum[LevelEnum.MediumPriority]} />
                                            <option value={LevelEnum.LowPriority} label={LevelEnum[LevelEnum.LowPriority]} />
                                        </Field>
                                        <ErrorMessage name="level" component="small" />
                                    </div>
                                    <div className="input-group">
                                        <label htmlFor="level">Due Date</label>
                                        <Field type="date" id="dueDate" name="dueDate"
                                               className={`${formikProps.errors.dueDate ? 'error' : ''}`}/>
                                        <ErrorMessage name="dueDate" component="small" />
                                    </div>
                                    <div className="input-group">
                                        <label htmlFor="level">Assign Developers</label>
                                        <SelectMultiUserMoleculeGC  data={userSelection} onSelect={selectDev}/>
                                    </div>
                                    <br/>
                                    <ButtonAtomGC text="Sumit" type="submit" className="is-primary" events={null} attributes={null}/>
                                    &nbsp;
                                    <Link to={'/'}>
                                        <ButtonAtomGC text="Cancel" type="submit" className="is-danger" events={null} attributes={null}/>
                                    </Link>
                                </Form>
                            )
                        }
                    </Formik>
                    <br/>
                </div>
            </div>)
}

export default CreateTaskComponentPage;