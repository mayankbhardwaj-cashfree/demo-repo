'use client';

import React, { useState } from 'react';
import {
  TextField,
  Typography,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  Box,
} from '@mui/material';
import { customStyles, designTokens } from '@/app/ui/design-tokens';

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
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData(prev => ({
      ...prev,
      [field]: event.target.value,
    }));
  };

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      accountType: event.target.value as 'savings' | 'current',
    }));
  };

  return (
    <Box 
      className={customStyles.formContainer}
      sx={{ 
        padding: '16px 20px',
        fontFamily: designTokens.typography.fontFamily.primary,
      }}
    >
      {/* Name Field */}
      <Box className={customStyles.fieldSpacing}>
        <Typography 
          variant="h6" 
          className={customStyles.inputLabel}
          sx={{
            fontSize: designTokens.typography.heading.fontSize,
            fontWeight: designTokens.typography.heading.fontWeight,
            color: designTokens.colors.primary.text,
            marginBottom: '12px',
          }}
        >
          Name (as per Aadhar)
        </Typography>
        <TextField
          fullWidth
          placeholder="First name and Last name"
          value={formData.name}
          onChange={handleInputChange('name')}
          variant="outlined"
          sx={{
            '& .MuiOutlinedInput-root': {
              height: '48px',
              fontSize: designTokens.typography.body.fontSize,
              fontWeight: designTokens.typography.body.fontWeight,
              borderRadius: designTokens.borderRadius.input,
              '& fieldset': {
                borderColor: designTokens.colors.primary.border,
              },
              '&:hover fieldset': {
                borderColor: designTokens.colors.primary.border,
              },
              '&.Mui-focused fieldset': {
                borderColor: designTokens.colors.primary.purple,
                borderWidth: '2px',
              },
            },
            '& .MuiInputBase-input': {
              color: designTokens.colors.primary.textSecondary,
              '&::placeholder': {
                color: designTokens.colors.primary.textSecondary,
                opacity: 1,
              },
            },
          }}
        />
      </Box>

      {/* Account Number Field */}
      <Box className={customStyles.fieldSpacing}>
        <Typography 
          variant="h6" 
          className={customStyles.inputLabel}
          sx={{
            fontSize: designTokens.typography.heading.fontSize,
            fontWeight: designTokens.typography.heading.fontWeight,
            color: designTokens.colors.primary.text,
            marginBottom: '12px',
          }}
        >
          Account number
        </Typography>
        <TextField
          fullWidth
          placeholder="123456789"
          value={formData.accountNumber}
          onChange={handleInputChange('accountNumber')}
          variant="outlined"
          sx={{
            '& .MuiOutlinedInput-root': {
              height: '48px',
              fontSize: designTokens.typography.body.fontSize,
              fontWeight: designTokens.typography.body.fontWeight,
              borderRadius: designTokens.borderRadius.input,
              '& fieldset': {
                borderColor: designTokens.colors.primary.border,
              },
              '&:hover fieldset': {
                borderColor: designTokens.colors.primary.border,
              },
              '&.Mui-focused fieldset': {
                borderColor: designTokens.colors.primary.purple,
                borderWidth: '2px',
              },
            },
            '& .MuiInputBase-input': {
              color: designTokens.colors.primary.textSecondary,
              '&::placeholder': {
                color: designTokens.colors.primary.textSecondary,
                opacity: 1,
              },
            },
          }}
        />
      </Box>

      {/* Bank Name Field */}
      <Box className={customStyles.fieldSpacing}>
        <Typography 
          variant="h6" 
          className={customStyles.inputLabel}
          sx={{
            fontSize: designTokens.typography.heading.fontSize,
            fontWeight: designTokens.typography.heading.fontWeight,
            color: designTokens.colors.primary.text,
            marginBottom: '12px',
          }}
        >
          Bank name
        </Typography>
        <TextField
          fullWidth
          placeholder="XYZ"
          value={formData.bankName}
          onChange={handleInputChange('bankName')}
          variant="outlined"
          sx={{
            '& .MuiOutlinedInput-root': {
              height: '48px',
              fontSize: designTokens.typography.body.fontSize,
              fontWeight: designTokens.typography.body.fontWeight,
              borderRadius: designTokens.borderRadius.input,
              '& fieldset': {
                borderColor: designTokens.colors.primary.border,
              },
              '&:hover fieldset': {
                borderColor: designTokens.colors.primary.border,
              },
              '&.Mui-focused fieldset': {
                borderColor: designTokens.colors.primary.purple,
                borderWidth: '2px',
              },
            },
            '& .MuiInputBase-input': {
              color: designTokens.colors.primary.textSecondary,
              '&::placeholder': {
                color: designTokens.colors.primary.textSecondary,
                opacity: 1,
              },
            },
          }}
        />
      </Box>

      {/* IFSC Field */}
      <Box className={customStyles.fieldSpacing}>
        <Typography 
          variant="h6" 
          className={customStyles.inputLabel}
          sx={{
            fontSize: designTokens.typography.heading.fontSize,
            fontWeight: designTokens.typography.heading.fontWeight,
            color: designTokens.colors.primary.text,
            marginBottom: '12px',
          }}
        >
          IFSC
        </Typography>
        <TextField
          fullWidth
          placeholder="XYZ123456"
          value={formData.ifsc}
          onChange={handleInputChange('ifsc')}
          variant="outlined"
          sx={{
            '& .MuiOutlinedInput-root': {
              height: '48px',
              fontSize: designTokens.typography.body.fontSize,
              fontWeight: designTokens.typography.body.fontWeight,
              borderRadius: designTokens.borderRadius.input,
              '& fieldset': {
                borderColor: designTokens.colors.primary.border,
              },
              '&:hover fieldset': {
                borderColor: designTokens.colors.primary.border,
              },
              '&.Mui-focused fieldset': {
                borderColor: designTokens.colors.primary.purple,
                borderWidth: '2px',
              },
            },
            '& .MuiInputBase-input': {
              color: designTokens.colors.primary.textSecondary,
              '&::placeholder': {
                color: designTokens.colors.primary.textSecondary,
                opacity: 1,
              },
            },
          }}
        />
      </Box>

      {/* Account Type Field */}
      <Box className={customStyles.fieldSpacing}>
        <Typography 
          variant="h6" 
          className={customStyles.inputLabel}
          sx={{
            fontSize: designTokens.typography.heading.fontSize,
            fontWeight: designTokens.typography.heading.fontWeight,
            color: designTokens.colors.primary.text,
            marginBottom: '12px',
          }}
        >
          Account type
        </Typography>
        <FormControl component="fieldset">
          <RadioGroup
            value={formData.accountType}
            onChange={handleRadioChange}
            sx={{ 
              flexDirection: 'row',
              gap: '100px',
              marginTop: '16px',
            }}
          >
            <FormControlLabel
              value="savings"
              control={
                <Radio 
                  size="small"
                  sx={{
                    color: designTokens.colors.radio.unchecked,
                    '&.Mui-checked': {
                      color: designTokens.colors.primary.purple,
                    },
                    '& .MuiSvgIcon-root': {
                      fontSize: '20px',
                    },
                  }}
                />
              }
              label={
                <Typography 
                  sx={{
                    fontSize: designTokens.typography.small.fontSize,
                    fontWeight: designTokens.typography.small.fontWeight,
                    color: designTokens.colors.primary.text,
                    marginLeft: '8px',
                  }}
                >
                  Savings account
                </Typography>
              }
            />
            <FormControlLabel
              value="current"
              control={
                <Radio 
                  size="small"
                  sx={{
                    color: designTokens.colors.radio.unchecked,
                    '&.Mui-checked': {
                      color: designTokens.colors.primary.purple,
                    },
                    '& .MuiSvgIcon-root': {
                      fontSize: '20px',
                    },
                  }}
                />
              }
              label={
                <Typography 
                  sx={{
                    fontSize: designTokens.typography.small.fontSize,
                    fontWeight: designTokens.typography.small.fontWeight,
                    color: designTokens.colors.primary.text,
                    marginLeft: '8px',
                  }}
                >
                  Current account
                </Typography>
              }
            />
          </RadioGroup>
        </FormControl>
      </Box>

      {/* Address Field */}
      <Box>
        <Typography 
          variant="h6" 
          className={customStyles.inputLabel}
          sx={{
            fontSize: designTokens.typography.heading.fontSize,
            fontWeight: designTokens.typography.heading.fontWeight,
            color: designTokens.colors.primary.text,
            marginBottom: '12px',
          }}
        >
          Address
        </Typography>
        <TextField
          fullWidth
          multiline
          rows={4}
          placeholder="Your permanent address"
          value={formData.address}
          onChange={handleInputChange('address')}
          variant="outlined"
          sx={{
            '& .MuiOutlinedInput-root': {
              fontSize: designTokens.typography.body.fontSize,
              fontWeight: designTokens.typography.body.fontWeight,
              borderRadius: designTokens.borderRadius.input,
              '& fieldset': {
                borderColor: designTokens.colors.primary.border,
              },
              '&:hover fieldset': {
                borderColor: designTokens.colors.primary.border,
              },
              '&.Mui-focused fieldset': {
                borderColor: designTokens.colors.primary.purple,
                borderWidth: '2px',
              },
            },
            '& .MuiInputBase-input': {
              color: designTokens.colors.primary.textSecondary,
              '&::placeholder': {
                color: designTokens.colors.primary.textSecondary,
                opacity: 1,
              },
            },
          }}
        />
      </Box>
    </Box>
  );
}