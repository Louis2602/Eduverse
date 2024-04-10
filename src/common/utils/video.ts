import { ICourse } from '@/type';

export function convertToEmbeddedUrl(youtubeUrl: String) {
  const videoId = extractVideoId(youtubeUrl); // Implement this function to extract the video ID
  if (videoId) {
    return `https://www.youtube.com/embed/${videoId}`;
  } else {
    return null; // Invalid or unsupported URL
  }
}

export function extractVideoId(youtubeUrl: String) {
  const match = youtubeUrl.match(/(?:[?&]v=|\/embed\/|\/\d{1,2}\/|\/vi?\/|https:\/\/youtu.be\/)([^&\/?#]+)/);
  return match ? match[1] : null;
}

export function getVideo(course: ICourse, videoId: string) {
  if (course && course.chapters) {
    for (const chapter of course?.chapters) {
      const lesson = chapter.lessons.find(lesson => lesson.id === videoId);
      if (lesson) {
        return { ...lesson, videoUrl: convertToEmbeddedUrl(lesson?.videoUrl) };
      }
    }
  }
  return null; // Không tìm thấy lesson với lessonId tương ứng
}
