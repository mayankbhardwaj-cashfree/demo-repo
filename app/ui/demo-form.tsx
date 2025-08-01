'use client';

import React, { useState } from 'react';
import {
  TextField,
  Typography,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  Button,
  Box,
  Paper,
} from '@mui/material';

interface DemoFormData {
  name: string;
  email: string;
  phone: string;
  gender: string;
}

export default function DemoForm() {
  const [formData, setFormData] = useState<DemoFormData>({
    name: '',
    email: '',
    phone: '',
    gender: 'male',
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  return (
    <Paper 
      elevation={0} 
      sx={{ 
        backgroundColor: '#FFFFFF',
        padding: '20px',
        width: '561px',
        height: '700px',
        margin: '0 auto',
      }}
    >
      <form onSubmit={handleSubmit}>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
          {/* Name Field */}
          <Box sx={{ marginBottom: '8px' }}>
            <Typography
              variant="h6"
              sx={{
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: 700,
                fontSize: '14px',
                lineHeight: '1.4',
                color: 'rgba(0, 0, 0, 0.87)',
                marginBottom: '12px',
              }}
            >
              Name
            </Typography>
            <TextField
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              label="First name"
              variant="outlined"
              size="medium"
              fullWidth
              sx={{
                '& .MuiOutlinedInput-root': {
                  borderRadius: '8px',
                  '& fieldset': {
                    borderColor: '#A6A7B0',
                  },
                },
                '& .MuiInputLabel-root': {
                  fontFamily: 'DM Sans, sans-serif',
                  fontWeight: 500,
                  fontSize: '14px',
                  color: '#A6A7B0',
                },
              }}
            />
          </Box>

          {/* Email Field */}
          <Box sx={{ marginBottom: '8px' }}>
            <Typography
              variant="h6"
              sx={{
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: 700,
                fontSize: '14px',
                lineHeight: '1.4',
                color: 'rgba(0, 0, 0, 0.87)',
                marginBottom: '12px',
              }}
            >
              Email
            </Typography>
            <TextField
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              label="example@email.com"
              variant="outlined"
              size="medium"
              fullWidth
              sx={{
                '& .MuiOutlinedInput-root': {
                  borderRadius: '8px',
                  '& fieldset': {
                    borderColor: '#A6A7B0',
                  },
                },
                '& .MuiInputLabel-root': {
                  fontFamily: 'DM Sans, sans-serif',
                  fontWeight: 500,
                  fontSize: '14px',
                  color: '#A6A7B0',
                },
              }}
            />
          </Box>

          {/* Phone Field */}
          <Box sx={{ marginBottom: '8px' }}>
            <Typography
              variant="h6"
              sx={{
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: 700,
                fontSize: '14px',
                lineHeight: '1.4',
                color: 'rgba(0, 0, 0, 0.87)',
                marginBottom: '12px',
              }}
            >
              Phone no.
            </Typography>
            <TextField
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleInputChange}
              label="+91-123456789"
              variant="outlined"
              size="medium"
              fullWidth
              sx={{
                '& .MuiOutlinedInput-root': {
                  borderRadius: '8px',
                  '& fieldset': {
                    borderColor: '#A6A7B0',
                  },
                },
                '& .MuiInputLabel-root': {
                  fontFamily: 'DM Sans, sans-serif',
                  fontWeight: 500,
                  fontSize: '14px',
                  color: '#A6A7B0',
                },
              }}
            />
          </Box>

          {/* Gender Selection */}
          <Box sx={{ marginTop: '16px', marginBottom: '24px' }}>
            <FormControl component="fieldset">
              <FormLabel
                component="legend"
                sx={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontWeight: 500,
                  fontSize: '12px',
                  lineHeight: '1.4',
                  color: 'rgba(0, 0, 0, 0.87)',
                  marginBottom: '16px',
                }}
              >
                Gender
              </FormLabel>
              <RadioGroup
                name="gender"
                value={formData.gender}
                onChange={handleInputChange}
                sx={{ gap: '4px' }}
              >
                <FormControlLabel
                  value="male"
                  control={
                    <Radio
                      size="small"
                      sx={{
                        color: '#6930CA',
                        '&.Mui-checked': {
                          color: '#6930CA',
                        },
                      }}
                    />
                  }
                  label={
                    <Typography
                      sx={{
                        fontFamily: 'DM Sans, sans-serif',
                        fontWeight: 500,
                        fontSize: '12px',
                        lineHeight: '1.4',
                        color: 'rgba(0, 0, 0, 0.87)',
                      }}
                    >
                      Male
                    </Typography>
                  }
                />
                <FormControlLabel
                  value="female"
                  control={
                    <Radio
                      size="small"
                      sx={{
                        color: 'rgba(0, 0, 0, 0.6)',
                        '&.Mui-checked': {
                          color: '#6930CA',
                        },
                      }}
                    />
                  }
                  label={
                    <Typography
                      sx={{
                        fontFamily: 'DM Sans, sans-serif',
                        fontWeight: 500,
                        fontSize: '12px',
                        lineHeight: '1.4',
                        color: 'rgba(0, 0, 0, 0.87)',
                      }}
                    >
                      Female
                    </Typography>
                  }
                />
                <FormControlLabel
                  value="others"
                  control={
                    <Radio
                      size="small"
                      sx={{
                        color: 'rgba(0, 0, 0, 0.6)',
                        '&.Mui-checked': {
                          color: '#6930CA',
                        },
                      }}
                    />
                  }
                  label={
                    <Typography
                      sx={{
                        fontFamily: 'DM Sans, sans-serif',
                        fontWeight: 500,
                        fontSize: '12px',
                        lineHeight: '1.4',
                        color: 'rgba(0, 0, 0, 0.87)',
                      }}
                    >
                      Others
                    </Typography>
                  }
                />
              </RadioGroup>
            </FormControl>
          </Box>

          {/* Submit Button */}
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', marginTop: '32px' }}>
            <Button
              type="submit"
              variant="contained"
              size="large"
              sx={{
                backgroundColor: '#6930CA',
                fontFamily: 'Roboto, sans-serif',
                fontWeight: 500,
                fontSize: '15px',
                letterSpacing: '0.03em',
                textTransform: 'uppercase',
                padding: '8px 22px',
                borderRadius: '4px',
                boxShadow: '0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)',
                '&:hover': {
                  backgroundColor: '#5a26a8',
                },
              }}
            >
              Submit
            </Button>
          </Box>
        </Box>
      </form>
    </Paper>
  );
}