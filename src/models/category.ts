export const defaultCategory = {
    '_id': '5fb2495d685674ae279f1357',
    'name_category': 'Truyện tranh',
    'rule': '<div>\n    <p><b>Nội dung cho phép </b></p>\n\n    <p>\n        Tổng hợp các review, thảo luận, nghiên cứu và đặt quan điểm tranh luận liên quan đến thế giới Comics (Marvel, DC, Valliants….)\n    </p>\n\n    <p><b>Quy định</b></p>\n    <ul>\n        <li> Những nội dung không thuộc phạm trù của danh mục sẽ bị nhắc nhở và xoá (nếu không thay đổi thích hợp)</li>\n\n        <li> Nghiêm cấm spam, quảng cáo </li>\n\n        <li> Nghiêm cấm post nội dung 18+ hay những quan điểm cực đoan liên quan tới chính trị - tôn giáo</li>\n\n        <li> Nghiêm cấm phát ngôn thiếu văn hoá và đả kích cá nhân.</li>\n    </ul>\n</div>\n\n\n',
    'url': 'comics',
    'url_images': 'https://spiderum.com/assets/images/categories/comics-min.jpg'
};
export type CategoryType = typeof defaultCategory;

export const listCategory = {
    'data' : [
        {
            '_id': '5fb261cb5542d4271188d79e',
            'name_category': 'Tâm sự',
            'rule': '<div>\n    <p><b>Nội dung cho phép </b></p>\n\n    <p>Tâm sự, tình cảm, các mối quan hệ trong gia đình và xã hội hoặc những câu chuyện cá nhân khác bạn muốn cộng đồng lắng nghe và đưa ra lời khuyên.</p>\n\n    <p><b>Quy định</b></p>\n    <ul>\n        <li> Những nội dung không thuộc phạm trù của danh mục sẽ bị nhắc nhở và xoá (nếu không thay đổi thích hợp)</li>\n\n        <li> Nghiêm cấm spam, quảng cáo </li>\n\n        <li> Nghiêm cấm post nội dung 18+ hay những quan điểm cực đoan liên quan tới chính trị - tôn giáo</li>\n\n        <li> Nghiêm cấm phát ngôn thiếu văn hoá và đả kích cá nhân.</li>\n\n        <li> Nghiêm cấm bài đăng không ghi rõ nguồn nếu đi cóp nhặt.</li>\n    </ul>\n</div>',
            'url': 'talk',
            'url_images': 'https://spiderum.com/assets/images/categories/conversation-min.jpg'
        },
    ]
};

export type ListCategoryType = typeof listCategory;
