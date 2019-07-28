import React from "react";
import PropTypes from "prop-types";
import {
  Card,
  CardHeader,
  CardBody,
  Form,
  FormGroup,
  FormInput,
  FormTextarea,
  Button,
  FormSelect
} from "shards-react";

const NewDraft = ({ title }) => (
  <Card small className="h-100">
    {/* Card Header */}
    <CardHeader className="border-bottom">
      <h6 className="m-0">{title}</h6>
    </CardHeader>

    <CardBody className="d-flex flex-column">
      <Form className="quick-post-form">
        {/* Title */}
        <FormGroup>
          <FormInput placeholder="Title of Task" />
        </FormGroup>
        {/* Assignee */}
        <FormGroup>
          <FormSelect onChange={() => {}}>
            <option value="default">Assignee</option>
            <option value="Derrick">Derrick</option>
            <option value="Victor">Victor</option>
            <option value="Dennis">Dennis</option>
            <option value="Alison">Alison</option>
            <option value="Peter">Peter</option>
          </FormSelect>
        </FormGroup>

        {/* Body */}
        <FormGroup>
          <FormTextarea placeholder="Assign additional tickets to your members" />
        </FormGroup>

        {/* Create Draft */}
        <FormGroup className="mb-0">
          <Button theme="accent" type="submit">
            Create Draft
          </Button>
        </FormGroup>
      </Form>
    </CardBody>
  </Card>
);

NewDraft.propTypes = {
  /**
   * The component's title.
   */
  title: PropTypes.string
};

NewDraft.defaultProps = {
  title: "Assign a Jira Task"
};

export default NewDraft;
