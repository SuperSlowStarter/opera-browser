import React from "react";
import {
  Typography,
  Card,
  CardMedia,
  CardContent,
  Grid,
  Chip,
} from "@mui/material";

const OperaDetail = ({ opera }) => {
  // 오페라 데이터에서 필요한 정보 추출
  const { title, overview, poster_path, release_date, vote_average, cast } =
    opera;

  return (
    // 오페라 정보를 보여주는 카드 컴포넌트
    <Card style={{ marginTop: "20px" }}>
      <Grid container>
        <Grid item xs={12} md={4}>
          {/* 오페라 포스터 이미지 */}
          <CardMedia
            component="img"
            height="500"
            image={poster_path}
            alt={title}
          />
        </Grid>
        <Grid item xs={12} md={8}>
          <CardContent>
            {/* 오페라 제목 */}
            <Typography variant="h4" component="h2">
              {title}
            </Typography>
            {/* 방영일과 평점 */}
            <Typography variant="subtitle1" color="textSecondary">
              방영일: {release_date}
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              평점: {vote_average}
            </Typography>
            {/* 오페라 개요 */}
            <Typography variant="body1" paragraph>
              {overview}
            </Typography>
            {/* 출연진 */}
            <Typography variant="h6" component="h3">
              출연진:
            </Typography>
            {/* 출연진 목록을 반복하여 Chip 컴포넌트로 렌더링 */}
            <Grid container spacing={1}>
              {cast.map((actor, index) => (
                <Grid item key={index}>
                  <Chip label={actor.name} />
                </Grid>
              ))}
            </Grid>
          </CardContent>
        </Grid>
      </Grid>
    </Card>
  );
};

export default OperaDetail;
