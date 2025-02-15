import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './userProfile.css';
import BasicLayout from "../../layouts/BasicLayout"
import axios from "axios";
import {useNavigate} from "react-router-dom";


function Profile() {
  // 비밀번호 이슈로 추가
  const [users, setUsers] = useState({
    userId: '',
    userName: '',
    password: '',
    phoneNum: '',
    // image: '', //프로필 이미지 추가
  });

  // 비밀번호 이슈로 추가
  const [newPassword, setNewPassword] = useState('');

  const navigate = useNavigate();


  const fetchData = async () => {
    try {
      const response = await axios.get('/api/user');
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching user details:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUsers((prevUsers) => ({
      ...prevUsers,
      [name]: value,
    }));
  };

  // 비밀번호 이슈로 추가
  const handlePasswordChange = (e) => {
    setNewPassword(e.target.value);
  };

  //이미지 파일 업로드
  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (!file) {
      return;
    }

    const allowedExtensions = ["jpg", "jpeg", "png"];
    const extension = file.name.split('.').pop().toLowerCase();

    if (allowedExtensions.indexOf(extension) === -1) {
      alert('이미지 파일(jpg, jpeg, png)만 업로드 가능합니다.');
      return;
    }

    const reader = new FileReader();

    reader.onloadend = () => {
      setUsers((prevUsers) => ({
        ...prevUsers,
        image: reader.result, // 프로필 이미지 변경
      }));
    };

    reader.readAsDataURL(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // 기본 폼 제출 방지

    // 비밀번호 유효성 검사 추가
    if (!newPassword) {
      alert('비밀번호를 입력하세요.');
      return;
    }

    // 비밀번호 이슈로 수정
    try {
      const response = await axios.post('/api/user', {
        userId: users.userId,
        userName: users.userName,
        password: newPassword,
        phoneNum: users.phoneNum,
        image: users.image, // 프로필 이미지 추가
      });

      if (response.data.alertMessage) {
        // 에러 또는 성공 메시지가 있으면 alert 창 띄우기
        alert(response.data.alertMessage);
      }

      if (response.data.successMessage) {
        console.log('Form submitted successfully:', response.data.successMessage);
        fetchData();
        navigate("/myPage");
      }
    } catch (error) {
      if (error.response) {
        // 서버 응답이 에러인 경우
        console.error('Error submitting form:', error.response.data);
        // 클라이언트에서 에러 메시지 처리 로직 추가
      } else if (error.request) {
        // 요청이 전혀 이루어지지 않은 경우
        console.error('Request error:', error.request);
      } else {
        // 기타 에러
        console.error('Unexpected error:', error.message);
      }
    }
  };

  return (
      <div>
        <BasicLayout>
          <h1 id="title">프로필 관리</h1>
          {/* <img src="/profile.jpg" width="200px" height="200px" alt="프로필 이미지" /> */}

          <Form onSubmit={handleSubmit}>
            {users.image ? (
                <img src={users.image} alt="프로필 이미지" width="200px" height="200px" />
            ) : (
                <img src="/profile.jpg" alt="프로필 이미지" width="200px" height="200px" />
            )}


            <Form.Group controlId="formFile" className="mb-3">
              <Form.Label>프로필 사진 업로드</Form.Label>
              <Form.Control type="file" accept=".jpg, .jpeg, .png" onChange={handleImageChange} id="input-value"/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label>아이디</Form.Label>
              <Form.Control type="text" name="userId" value={users.userId} disabled id="input-value"/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupPassword">
              <Form.Label>비밀번호</Form.Label>
              {/* 비밀번호 이슈로 수정 */}
              <Form.Control
                  type="password"
                  name="password"
                  value={newPassword || ''}
                  placeholder="Enter New Password"
                  onChange={handlePasswordChange}
                  id="input-value"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupName">
              <Form.Label>이름</Form.Label>
              <Form.Control
                  type="text"
                  name="userName"
                  value={users.userName || ''}
                  placeholder="Name"
                  onChange={handleInputChange}
                  id="input-value"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupPhone">
              <Form.Label>핸드폰번호</Form.Label>
              <Form.Control
                  type="text"
                  name="phoneNum"
                  value={users.phoneNum || ''}
                  placeholder="- 없이 입력해주세요"
                  onChange={handleInputChange}
                  id="input-value"
              />
            </Form.Group>
            <Button id="modify" variant="primary" type="submit">
              수정완료
            </Button>
          </Form>
        </BasicLayout>
      </div>
  );
}

export default Profile;

