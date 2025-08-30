import React from "react";
import "./RelatedCommunity.css";

const RelatedCommunity = () => {
  // 관련 커뮤니티 데이터
  const hotTopics = [
    {
      id: 1,
      title: "신규 캐릭터 '아이리스' 리뷰",
      author: "게임마스터",
      views: 1247,
      likes: 89,
      time: "2시간 전",
    },
    {
      id: 2,
      title: "2.5주년 이벤트 공략 가이드",
      author: "전략가",
      views: 2156,
      likes: 156,
      time: "5시간 전",
    },
    {
      id: 3,
      title: "신규 장비 세트 추천 조합",
      author: "장비전문가",
      views: 892,
      likes: 67,
      time: "8시간 전",
    },
    {
      id: 4,
      title: "PVP 메타 분석 및 팁",
      author: "PVP고수",
      views: 3421,
      likes: 234,
      time: "1일 전",
    },
    {
      id: 5,
      title: "스토리 모드 클리어 공략",
      author: "스토리러버",
      views: 1567,
      likes: 123,
      time: "1일 전",
    },
  ];

  const communityNews = [
    {
      id: 1,
      title: "커뮤니티 규칙 개정 안내",
      type: "공지",
      time: "3일 전",
    },
    {
      id: 2,
      title: "이번주 인기글 순위",
      type: "랭킹",
      time: "1주 전",
    },
    {
      id: 3,
      title: "신규 이벤트 참여 방법",
      type: "가이드",
      time: "1주 전",
    },
  ];

  return (
    <div className="related-community">
      {/* 핫토픽 섹션 */}
      <div className="community-section hot-topics">
        <h3 className="section-title">🔥 핫토픽</h3>
        <div className="topic-list">
          {hotTopics.map((topic) => (
            <div key={topic.id} className="topic-item">
              <div className="topic-header">
                <span className="topic-title">{topic.title}</span>
                <span className="topic-time">{topic.time}</span>
              </div>
              <div className="topic-meta">
                <span className="topic-author">{topic.author}</span>
                <div className="topic-stats">
                  <span className="views">👁 {topic.views}</span>
                  <span className="likes">❤ {topic.likes}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 커뮤니티 소식 섹션 */}
      <div className="community-section community-news">
        <h3 className="section-title">📢 커뮤니티 소식</h3>
        <div className="news-list">
          {communityNews.map((news) => (
            <div key={news.id} className="news-item">
              <div className="news-type">{news.type}</div>
              <div className="news-title">{news.title}</div>
              <div className="news-time">{news.time}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RelatedCommunity;
