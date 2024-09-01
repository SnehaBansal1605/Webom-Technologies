import React, { useState } from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { TextField } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import "./RequestQuoteForm.css";

const steps = [
  "Basic Information",
  "Project Details",
  "Additional Information",
];

const projectType = [
  { value: "Website Development", label: "Website Development" },
  { value: "Mobile App Development", label: "Mobile App Development" },
  { value: "UI/UX Design", label: "UI/UX Design" },
  { value: "Cloud Solutions", label: "Cloud Solutions" },
  { value: "Cybersecurity Services", label: "Cybersecurity Services" },
  { value: "IT Consulting", label: "IT Consulting" },
  { value: "SEO", label: "SEO" },
];

const budget = [
  { value: "$1,000 - $5,000", label: "$1,000 - $5,000" },
  { value: "$5,000 - $10,000", label: "$5,000 - $10,000" },
  { value: "$10,000 - $20,000", label: "$10,000 - $20,000" },
  { value: "$20,000+", label: "$20,000+" },
  { value: "Not sure", label: "Not sure" },
];

const timeline = [
  { value: "Less than 1 month", label: "Less than 1 month" },
  { value: "1-3 months", label: "1-3 months" },
  { value: "3-6 months", label: "3-6 months" },
  { value: "6 months or longer", label: "6 months or longer" },
];

export default function RequestQuoteForm() {
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    companyName: "",
    companyWebsite: "",
    projectType: "",
    description: "",
    budget: "",
    timeline: "",
    services: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      services: checked
        ? [...prev.services, name]
        : prev.services.filter((service) => service !== name),
    }));
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>

      {activeStep === steps.length ? (
        <div className="mt-3 text-center">
          <h4>Thank you for submitting your details!</h4>
          <p>
            Our team is currently reviewing your request and will reach out to
            you shortly. We look forward to discussing how we can help with your
            project.
          </p>
        </div>
      ) : (
        <>
          {activeStep === 0 && (
            <>
              <form className="mt-3">
                <TextField
                  label="Name"
                  className="col-md-6 col-12 m-2"
                  name="name"
                  variant="outlined"
                  fullWidth
                  required
                  value={formData.name}
                  onChange={handleChange}
                />
                <TextField
                  label="Email Address"
                  className="col-md-6 col-12 m-2"
                  name="email"
                  variant="outlined"
                  fullWidth
                  required
                  value={formData.email}
                  onChange={handleChange}
                />
                <TextField
                  label="Phone Number"
                  className="col-md-6 col-12 m-2"
                  name="phone"
                  variant="outlined"
                  fullWidth
                  value={formData.phone}
                  onChange={handleChange}
                />
                <TextField
                  label="Company Name"
                  className="col-md-6 col-12 m-2"
                  name="companyName"
                  variant="outlined"
                  fullWidth
                  value={formData.companyName}
                  onChange={handleChange}
                />
                <TextField
                  label="Company Website"
                  className="col-md-6 col-12 m-2"
                  name="companyWebsite"
                  variant="outlined"
                  fullWidth
                  value={formData.companyWebsite}
                  onChange={handleChange}
                />
              </form>
            </>
          )}

          {activeStep === 1 && (
            <>
              <form className="mt-3">
                <TextField
                  select
                  label="Project Type"
                  className="col-12 m-2"
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  fullWidth
                >
                  {projectType.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
                <TextField
                  className="col-12 m-2"
                  label="Description"
                  multiline
                  rows={4}
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  fullWidth
                />
                <TextField
                  select
                  label="Estimated Budget"
                  className="col-md-6 col-12 m-2"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  fullWidth
                >
                  {budget.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
                <TextField
                  select
                  label="Timeline"
                  className="col-md-6 col-12 m-2"
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleChange}
                  fullWidth
                >
                  {timeline.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </form>
            </>
          )}

          {activeStep === 2 && (
            <>
              <form className="mt-3">
                <label>Services Required</label>
                <FormGroup className="d-flex flex-row servicesReq">
                  <FormControlLabel
                    control={
                      <Checkbox
                        name="Software Development"
                        onChange={handleCheckboxChange}
                        checked={formData.services.includes(
                          "Software Development"
                        )}
                      />
                    }
                    label="Software Development"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        name="Cloud Hosting"
                        onChange={handleCheckboxChange}
                        checked={formData.services.includes("Cloud Hosting")}
                      />
                    }
                    label="Cloud Hosting"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        name="Maintenance & Support"
                        onChange={handleCheckboxChange}
                        checked={formData.services.includes(
                          "Maintenance & Support"
                        )}
                      />
                    }
                    label="Maintenance & Support"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        name="Security Audits"
                        onChange={handleCheckboxChange}
                        checked={formData.services.includes("Security Audits")}
                      />
                    }
                    label="Security Audits"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        name="IT Consulting"
                        onChange={handleCheckboxChange}
                        checked={formData.services.includes("IT Consulting")}
                      />
                    }
                    label="IT Consulting"
                  />
                </FormGroup>
              </form>
            </>
          )}

          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: "1 1 auto" }} />
            <Button onClick={handleNext}>
              {activeStep === steps.length - 1 ? "Finish" : "Next"}
            </Button>
          </Box>
        </>
      )}
    </Box>
  );
}
