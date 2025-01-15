import { memo } from "react";
import { Field } from "formik";
import { format } from "date-fns";

import AccessTimeIcon from "@mui/icons-material/AccessTime";
import {
  DatePicker,
  LocalizationProvider,
  TimePicker,
} from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

import { FormInput, Input } from "components/Input";
import { FormSelect } from "components/Select";
import { getStyles } from "./styles";

const FieldComponent = memo(({ field, fieldValue, setFieldValue }) => {
  const classes = getStyles();

  switch (field.type) {
    case "field": {
      return <Field component={FormInput} {...field.props} />;
    }
    case "select": {
      return <Field component={FormSelect} {...field.props} />;
    }
    case "time": {
      return (
        <Field
          component={() => (
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <TimePicker
                sx={classes.dataPickerRoot}
                {...field.props}
                slots={{ openPickerIcon: AccessTimeIcon }}
                views={["hours", "minutes"]}
                format="hh:mm"
                onChange={(newValue) => {
                  const selectedTime = format(new Date(newValue), "hh:mm:aa");
                  setFieldValue(selectedTime);
                }}
                renderInput={(params) => <Input {...params} />}
              />
            </LocalizationProvider>
          )}
          {...field.props}
        />
      );
    }
    case "date": {
      return (
        <Field
          component={() => (
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                sx={classes.dataPickerRoot}
                slotProps={{
                  popper: {
                    sx: classes.dataPickerSelectedData,
                  },
                }}
                renderInput={(params) => <Input {...params} />}
                {...field.props}
                onChange={(newValue) => {
                  const selectedTime = format(new Date(newValue), "yyyy/MM/dd");
                  setFieldValue(selectedTime);
                }}
              />
            </LocalizationProvider>
          )}
          {...field.props}
        />
      );
    }
    default:
      return null;
  }
});

export default FieldComponent;
