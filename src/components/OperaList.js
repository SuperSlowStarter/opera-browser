import React from "react";
import { Grid, Card, CardMedia, CardContent, Typography } from "@mui/material";

const OperaList = ({ operas, onOperaSelect }) => {
  return (
    <Grid container spacing={4}>
      {/* 오페라 목록을 반복하여 Card 컴포넌트로 렌더링 */}
      {operas.map((opera) => (
        <Grid item key={opera.id} xs={12} sm={6} md={3}>
          <Card onClick={() => onOperaSelect(opera)}>
            <CardMedia
              component="img"
              height="500"
              image={opera.poster_path}
              alt={opera.title}
            />
            <CardContent>
              <Typography variant="h6">{opera.title}</Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default OperaList;
