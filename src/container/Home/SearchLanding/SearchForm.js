import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import isEmpty from 'lodash/isEmpty';
import { FaMapMarkerAlt, FaRegCalendar, FaUserFriends } from 'react-icons/fa';
import { Button } from 'antd';
import DateRangePickerBox from 'components/UI/DatePicker/ReactDates';
import MapAutoComplete from 'components/Map/MapAutoComplete';
import MapDropdown from 'components/Map/MapDropdown'
import { mapDataHelper } from 'components/Map/mapDataHelper';
import ViewWithPopup from 'components/UI/ViewWithPopup/ViewWithPopup';
import InputIncDec from 'components/UI/InputIncDec/InputIncDec';
import { setStateToUrl } from 'library/helpers/url_handler';
import { LISTING_POSTS_PAGE } from 'settings/constant';
import {
  FormWrapper,
  ComponentWrapper,
  RoomGuestWrapper,
  ItemWrapper,
} from './Search.style';

const calendarItem = {
  separator: '-',
  format: 'MM-DD-YYYY',
  locale: 'en',
};

const SearchForm = ({ history }) => {
  const [searchDate, setSearchDate] = useState({
    setStartDate: null,
    setEndDate: null,
  });
  const [mapValue, setMapValue] = useState([]);

  // Room guest state
  const [roomGuest, setRoomGuest] = useState({
    room: 0,
    guest: 0,
  });

  const updatevalueFunc = (event) => {
    const { searchedPlaceAPIData } = event;
    if (!isEmpty(searchedPlaceAPIData)) {
      setMapValue(searchedPlaceAPIData);
    }
  };

  // Room Guest data handling
  const handleIncrement = (type) => {
    setRoomGuest({
      ...roomGuest,
      [type]: roomGuest[type] + 1,
    });
  };

  const handleDecrement = (type) => {
    if (roomGuest[type] <= 0) {
      return false;
    }
    setRoomGuest({
      ...roomGuest,
      [type]: roomGuest[type] - 1,
    });
  };

  const handleIncDecOnChnage = (e, type) => {
    let currentValue = e.target.value;

    setRoomGuest({
      ...roomGuest,
      [type]: currentValue,
    });
  };

  const goToSearchPage = () => {
    let tempLocation = [];
    const mapData = mapValue ? mapDataHelper(mapValue) : [];
    mapData &&
      mapData.map((singleMapData, i) => {
        return tempLocation.push({
          formattedAddress: singleMapData ? singleMapData.formattedAddress : '',
          lat: singleMapData ? singleMapData.lat.toFixed(3) : null,
          lng: singleMapData ? singleMapData.lng.toFixed(3) : null,
        });
      });
    const location = tempLocation ? tempLocation[0] : {};
    const query = {
      date_range: searchDate,
      room: roomGuest.room,
      guest: roomGuest.guest,
      location,
    };
    const search = setStateToUrl(query);
    history.push({
      pathname: LISTING_POSTS_PAGE,
      search: search,
    });
  };

  return (
    <FormWrapper>
      <ComponentWrapper>
        <FaMapMarkerAlt className="map-marker" />
        <MapDropdown />
      </ComponentWrapper>

      <ComponentWrapper>
        <FaRegCalendar className="calendar" />
        <DateRangePickerBox
          item={calendarItem}
          startDateId="startDateId-id-home"
          endDateId="endDateId-id-home"
          updateSearchData={(setDateValue) => setSearchDate(setDateValue)}
          showClearDates={true}
          small={true}
          numberOfMonths={1}
        />
      </ComponentWrapper>
      
      <Button
        type="primary"
        htmlType="submit"
        size="large"
        onClick={goToSearchPage}
      >
        Find
      </Button>
    </FormWrapper>
  );
};

export default withRouter(SearchForm);
