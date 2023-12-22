import {useSelector} from 'react-redux';
import {RootState} from '../../app/store';
import React from 'react';

interface Props {
  showId: number | null;
}

const InfoShows: React.FC<Props> = ({showId}) => {

  const showDetails = useSelector((state: RootState) => {
    return state.content.find((item) => item.id === showId);
  });

  if (!showDetails) {
    return null;
  }

  const {id, image, name, summary} = showDetails || {};

  return (
    <div key={id} className="d-flex gap-3 p-3 movies">
      {image && (
        <div>
          <img src={image.medium} alt={name} style={{width: '100px', height: '150px'}}/>
        </div>
      )}
      <div>
        <span>{name}</span>
        <p>{summary}</p>
      </div>
    </div>
  );
};

export default InfoShows;
