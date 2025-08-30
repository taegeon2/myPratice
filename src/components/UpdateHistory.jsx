import React from "react";
import "./UpdateHistory.css";

const UpdateHistory = () => {
  // 실제 카운터사이드 업데이트 데이터 (5개로 줄임)
  const updates = [
    {
      id: 1,
      title: "상점안내",
      date: "8/27(수)",
      content:
        "안녕하세요, 사장님. 이번주 업데이트되는 새로운 상품을 안내해 드립니다. 8월 27일 업데이트에 관한 자세한 내용은 아래의 링크를 참고해 주세요. ▷ [8/27(수) 패치노트 안내] 바로가기 상점 변경...",
    },
    {
      id: 2,
      title: "패치노트",
      date: "8/27(수)",
      content:
        "◆ 업데이트 내역 시간: 2025.8.27(수) 10:10 영향: 별도의 점검 없이 콘텐츠가 오픈될 예정입니다. 꼭 읽어주세요! - 업데이트 이전까지 패치노트 내용이 추가/변경될 수 있습니다.",
    },
    {
      id: 3,
      title: "서버 패치",
      date: "8/25(월)",
      content:
        "안녕하세요, 사장님. 카운터사이드 운영팀입니다. 8/25(월) 12시 무점검 서버 패치가 진행됩니다. 패치 진행 중 일시적인 순단 현상이 발생할 수 있으니 유의해 주시기 바랍니다.",
    },
    {
      id: 4,
      title: "데이터 패치",
      date: "8/22(금)",
      content:
        "안녕하세요, 사장님. 카운터사이드 운영팀입니다. 8/22(금) 12시 데이터 패치가 진행됩니다. 안내해 드린 시간 이후 게임에 접속하시면 데이터 패치가 다운로드 및 적용됩니다.",
    },
    {
      id: 5,
      title: "서버 패치",
      date: "8/20(수)",
      content:
        "안녕하세요, 사장님. 카운터사이드 운영팀입니다. 8/20(수) 18시 무점검 서버 패치가 진행됩니다. 패치 진행 중 일시적인 순단 현상이 발생할 수 있습니다.",
    },
  ];

  return (
    <div className="update-history">
      <h3 className="update-title">카운터사이드 업데이트</h3>
      <div className="update-list">
        {updates.map((update) => (
          <div key={update.id} className="update-item">
            <div className="update-content">
              <div className="update-title-text">{update.title}</div>
              <div className="update-date">{update.date}</div>
              <div className="update-description">{update.content}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="pagination">
        <button className="page-btn prev">이전</button>
        <div className="page-dots">
          <span className="dot active"></span>
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>
        <button className="page-btn next">다음</button>
      </div>
    </div>
  );
};

export default UpdateHistory;
