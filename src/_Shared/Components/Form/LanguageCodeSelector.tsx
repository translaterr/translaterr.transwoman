import React, {useContext} from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Skeleton from "@material-ui/lab/Skeleton";
import { makeStyles } from '@material-ui/core/styles';

import LanguagesContext from "../../Contexts/LanguagesContext";
import LanguageModel from "../../Models/LanguageModel";

const useStyles = makeStyles({
  option: {
    width: 300,
    fontSize: 15,
    '& > span': {
      marginRight: 10,
      fontSize: 18,
    },
  },
});

const LanguageCodeSelector: React.FC = () => {

  const classes = useStyles();
  const {languages, isLoading} = useContext(LanguagesContext);

  if(isLoading) {
    return <Skeleton />;
  }

  return (
      <Autocomplete
          options={languages}
          classes={{
            option: classes.option,
          }}
          autoHighlight
          getOptionLabel={(option: LanguageModel) => option.name}
          renderOption={(option: LanguageModel) => (
              <>
                <span>{option.languageCode}</span>
                {option.name}
              </>
          )}
          renderInput={(params) => (
              <TextField
                  {...params}
                  label="Choose a country"
                  variant="outlined"
                  inputProps={{
                    ...params.inputProps,
                    autoComplete: 'new-password',
                  }}
              />
          )}
      />
  );
};

LanguageCodeSelector.displayName = "LanguageCodeSelector";
export default LanguageCodeSelector;