'use client';

import React, { useState } from 'react';
import {
  Box,
  TextField,
  Typography,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  Paper,
  Stack,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { designTokens } from '@/app/lib/design-tokens';

// Styled components using design tokens
const FormContainer = styled(Paper)(({ theme }) => ({
  width: designTokens.layout.formWidth,
  maxWidth: '100%',
  padding: designTokens.spacing.lg,
  backgroundColor: designTokens.colors.background.paper,
  boxShadow: designTokens.shadows.none,
  border: 'none',
  fontFamily: designTokens.typography.fontFamily,
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
  width: '100%',
  '& .MuiOutlinedInput-root': {
    borderRadius: designTokens.borderRadius.input,
    fontFamily: designTokens.typography.fontFamily,
    fontSize: designTokens.typography.input.fontSize,
    fontWeight: designTokens.typography.input.fontWeight,
    '& fieldset': {
      borderColor: designTokens.colors.border.main,
    },
    '&:hover fieldset': {
      borderColor: designTokens.colors.border.main,
    },
    '&.Mui-focused fieldset': {
      borderColor: designTokens.colors.primary.main,
    },
  },
  '& .MuiInputLabel-root': {
    fontFamily: designTokens.typography.fontFamily,
    fontSize: designTokens.typography.input.fontSize,
    color: designTokens.colors.primary.textSecondary,
  },
  '& .MuiOutlinedInput-input': {
    padding: designTokens.layout.inputPadding,
    color: designTokens.colors.primary.textSecondary,
  },
}));

const FieldLabel = styled(Typography)(({ theme }) => ({
  fontFamily: designTokens.typography.fontFamily,
  fontSize: designTokens.typography.label.fontSize,
  fontWeight: designTokens.typography.label.fontWeight,
  lineHeight: designTokens.typography.label.lineHeight,
  color: designTokens.colors.primary.text,
  marginBottom: designTokens.spacing.xs,
}));

const RadioLabel = styled(Typography)(({ theme }) => ({
  fontFamily: designTokens.typography.fontFamily,
  fontSize: designTokens.typography.radioLabel.fontSize,
  fontWeight: designTokens.typography.radioLabel.fontWeight,
  lineHeight: designTokens.typography.radioLabel.lineHeight,
  color: designTokens.colors.primary.text,
}));

const StyledRadio = styled(Radio)(({ theme }) => ({
  '&.Mui-checked': {
    color: designTokens.colors.radio.checked,
  },
  '&:not(.Mui-checked)': {
    color: designTokens.colors.radio.unchecked,
  },
}));

const StyledTextArea = styled(TextField)(({ theme }) => ({
  width: '100%',
  '& .MuiOutlinedInput-root': {
    borderRadius: designTokens.borderRadius.input,
    fontFamily: designTokens.typography.fontFamily,
    fontSize: designTokens.typography.input.fontSize,
    fontWeight: designTokens.typography.input.fontWeight,
    minHeight: designTokens.layout.textAreaHeight,
    '& fieldset': {
      borderColor: designTokens.colors.border.main,
    },
    '&:hover fieldset': {
      borderColor: designTokens.colors.border.main,
    },
    '&.Mui-focused fieldset': {
      borderColor: designTokens.colors.primary.main,
    },
  },
  '& .MuiInputLabel-root': {
    fontFamily: designTokens.typography.fontFamily,
    fontSize: designTokens.typography.input.fontSize,
    color: designTokens.colors.primary.textSecondary,
  },
  '& .MuiOutlinedInput-input': {
    padding: '12px 10px 0px 10px',
    color: designTokens.colors.primary.textSecondary,
  },
}));

interface FormData {
  name: string;
  accountNumber: string;
  bankName: string;
  ifsc: string;
  accountType: 'savings' | 'current';
  address: string;
}

export default function DemoForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    accountNumber: '',
    bankName: '',
    ifsc: '',
    accountType: 'savings',
    address: '',
  });

  const handleInputChange = (field: keyof FormData) => (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFormData(prev => ({
      ...prev,
      [field]: event.target.value,
    }));
  };

  const handleAccountTypeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      accountType: event.target.value as 'savings' | 'current',
    }));
  };

  return (
    <Box 
      sx={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center',
        minHeight: '100vh',
        padding: designTokens.spacing.md,
        backgroundColor: '#f5f5f5',
      }}
    >
      <FormContainer>
        <Stack spacing={3}>
          {/* Name Field */}
          <Box>
            <FieldLabel>Name (as per Aadhar)</FieldLabel>
            <StyledTextField
              variant="outlined"
              label="First name and Last name"
              value={formData.name}
              onChange={handleInputChange('name')}
              size="medium"
            />
          </Box>

          {/* Account Number Field */}
          <Box>
            <FieldLabel>Account number</FieldLabel>
            <StyledTextField
              variant="outlined"
              label="123456789"
              value={formData.accountNumber}
              onChange={handleInputChange('accountNumber')}
              size="medium"
            />
          </Box>

          {/* Bank Name Field */}
          <Box>
            <FieldLabel>Bank name</FieldLabel>
            <StyledTextField
              variant="outlined"
              label="XYZ"
              value={formData.bankName}
              onChange={handleInputChange('bankName')}
              size="medium"
            />
          </Box>

          {/* IFSC Field */}
          <Box>
            <FieldLabel>IFSC</FieldLabel>
            <StyledTextField
              variant="outlined"
              label="XYZ123456"
              value={formData.ifsc}
              onChange={handleInputChange('ifsc')}
              size="medium"
            />
          </Box>

          {/* Account Type Radio Buttons */}
          <Box>
            <FieldLabel>Account type</FieldLabel>
            <FormControl component="fieldset" sx={{ mt: 1 }}>
              <RadioGroup
                value={formData.accountType}
                onChange={handleAccountTypeChange}
                sx={{ 
                  display: 'flex', 
                  flexDirection: 'row', 
                  gap: 4,
                }}
              >
                <FormControlLabel
                  value="savings"
                  control={<StyledRadio size="small" />}
                  label={<RadioLabel>Savings account</RadioLabel>}
                  sx={{ 
                    margin: 0,
                    '& .MuiFormControlLabel-label': {
                      marginLeft: '8px',
                    }
                  }}
                />
                <FormControlLabel
                  value="current"
                  control={<StyledRadio size="small" />}
                  label={<RadioLabel>Current account</RadioLabel>}
                  sx={{ 
                    margin: 0,
                    '& .MuiFormControlLabel-label': {
                      marginLeft: '8px',
                    }
                  }}
                />
              </RadioGroup>
            </FormControl>
          </Box>

          {/* Address Text Area */}
          <Box>
            <FieldLabel>Address</FieldLabel>
            <StyledTextArea
              variant="outlined"
              label="Your permanent address"
              value={formData.address}
              onChange={handleInputChange('address')}
              multiline
              rows={4}
              size="medium"
            />
          </Box>
        </Stack>
      </FormContainer>
    </Box>
  );
}