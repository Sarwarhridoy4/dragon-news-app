import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import Image from 'react-bootstrap/Image'
import { FaEye, FaRegBookmark, FaShareAlt, FaStar } from "react-icons/fa";
const NewsSummaryCard = ({ news }) => {
  const { _id, title, author, details, image_url, total_view,rating} = news;
  return (
    <Card className='mb-5 mt-3'>
      <Card.Header className="d-flex justify-content-between align-items-center">
        <div className="d-flex justify-content-center align-items-center">
          <Image
            roundedCircle
            style={{height:'60px'}}
            src={author?.img}>
          </Image>
          <div className="ms-2">
            <p className="m-0">{author?.name}</p>
            <p>{author?.published_date}</p>
          </div>
        </div>
        <div className="">
          <FaRegBookmark />
          <FaShareAlt/>
        </div>
      </Card.Header>
      <Card.Body>
              <Card.Title>{title}</Card.Title>
              <Card.Img variant="top" src={image_url} />
        <Card.Text>
          <div>
          {details.length > 250 ? 
            <p>
              {details.slice(0, 250) + "..."}
              <Link to={`/news/${_id}`}>Read More</Link>
            </p>
           : 
            <p>{details}</p>
          }
          </div>
        </Card.Text>
      </Card.Body>
      <Card.Footer className='text-muted m-2 d-flex align-items-center justify-content-between'>
        <div className="d-flex align-items-center gap-2">
          <FaEye className="text-danger"></FaEye>
          <span>{total_view}</span>
        </div>
        <div className="d-flex align-items-center gap-2">
          <FaStar className="text-warning"></FaStar>
          <span>{rating?.number}</span>
        </div>
      </Card.Footer>
    </Card>
  );
};

export default NewsSummaryCard;
