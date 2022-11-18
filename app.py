#create virtualenv first 

from crypt import methods
import re
from flask import Flask, render_template, Response, make_response, redirect, url_for, request
import numpy as np
from tensorflow import keras

Labels=['ENFJ', 'ENFP' , 'ENTJ' , 'ENTP' , 'ESFJ' , 'ESFP', 'ESTJ', 'ESTP', 'INFJ', 'INFP', 'INTJ', 'INTP', 'ISFJ', 'ISFP', 'ISTJ', 'ISTP']

app = Flask(__name__)
model = keras.models.load_model(r'WEB-FOR-REAL-main/models/final.h5') # copy relative path

@app.route('/')  # homepage
def index():
    return render_template('homepage.html')


@app.route('/contact')
def contact():
    return render_template('contact.html')

@app.route('/intro')  # intro
def intro():
    return render_template('intro.html')

@app.route('/test', methods = ['POST', 'GET'])  
def take_test():
    return render_template('test1.html')

@app.route('/test2', methods = ['POST', 'GET']) 
def take_test2():
    return render_template('test2.html')



@app.route('/predict', methods = ['POST', 'GET'])

def predict():
    
    int_features = [int(x) for x in request.form.values()]
    features = np.array(int_features)
    features = features.reshape(1, -1)
    prediction = model.predict(features) #probability of 16 groups 
    result=Labels[np.argmax(prediction)] #personality type
    def predictor(prediction):    
        if Labels[np.argmax(prediction)]=='ENFJ':
            jobs = """  
        Quảng cáo
        Mỹ thuật
        Đào tạo thể chất
        Quản trị kinh doanh
        Nghiên cứu truyền thông
        Tư vấn Tâm lý
        Tư pháp hình sự và tội phạm học
        Giáo dục
        Tiếng Anh
        Quản lý doanh nhân
        Thiết kế môi trường
        Nghiên cứu gia đình
        Quản lý nghệ thuật đồ họa
        Khoa học sức khỏe
        Quản lý Khách sạn và Thực phẩm
        Quản trị nhân sự
        Thiết kế nội thất
        Báo chí
        Marketing
        Phương tiện truyền thông
        Những ngôn ngữ hiện đại 
        Âm nhạc
        Dinh dưỡng
        Khoa học chính trị
        Tâm lý
        Quan hệ công chúng
        Nghiên cứu tôn giáo
        Công tác xã hội
        Xã hội học
        Bệnh lý ngôn ngữ nói
        Sân khấu, rạp hát
        Quy hoạch và Phát triển Đô thị

        """
        elif Labels[np.argmax(prediction)]=='ENFP':
            jobs = """  
        Khoa học tính toán bảo hiểm
        Quảng cáo
        Nhân loại học
        Thiết kế trang phục
        Mỹ thuật
        Đào tạo thể chất
        Quản trị kinh doanh
        Hoá học
        Chuyên gia về Đời sống Trẻ em
        Khoa học máy tính
        Tư vấn Tâm lý
        Tư pháp hình sự và tội phạm học
        Dinh dưỡng
        Giáo dục (Tiểu học hoặc Trung học)
        Tiếng Anh
        Thiết kế môi trường
        Quy hoạch đô thị
        Khoa học thể chất
        Kinh doanh thời trang
        Quản lý Khách sạn và Thực phẩm
        Quản lý nghệ thuật đồ họa
        Thiết kế nội thất
        Báo chí
        Nghiên cứu pháp lý
        Ban quản lý
        Marketing
        Phương tiện truyền thông
        Kỹ thuật y khoa
        Những ngôn ngữ hiện đại
        Quản lý Tài nguyên và Môi trường
        Giáo dục sức khỏe và thể chất
        Khoa học chính trị
        Tiền Luật
        Tâm lý
        Quan hệ công chúng
        Nghiên cứu tôn giáo
        Quản lý rủi ro và bảo hiểm
        Công tác xã hội
        Xã hội học
        Bệnh lý học ngôn ngữ nói
        Sân khấu, rạp hát"""
        elif Labels[np.argmax(prediction)]=='ENFP':
            jobs = """  
        Khoa học tính toán bảo hiểm
        Quảng cáo
        Nhân loại học
        Thiết kế trang phục
        Mỹ thuật
        Đào tạo thể chất
        Quản trị kinh doanh
        Hoá học
        Chuyên gia về Đời sống Trẻ em
        Khoa học máy tính
        Tư vấn Tâm lý
        Tư pháp hình sự và tội phạm học
        Dinh dưỡng
        Giáo dục (Tiểu học hoặc Trung học)
        Tiếng Anh
        Thiết kế môi trường
        Quy hoạch đô thị
        Khoa học thể chất
        Kinh doanh thời trang
        Quản lý Khách sạn và Thực phẩm
        Quản lý nghệ thuật đồ họa
        Thiết kế nội thất
        Báo chí
        Nghiên cứu pháp lý
        Ban quản lý
        Marketing
        Phương tiện truyền thông
        Kỹ thuật y khoa
        Những ngôn ngữ hiện đại
        Quản lý Tài nguyên và Môi trường
        Giáo dục sức khỏe và thể chất
        Khoa học chính trị
        Tiền Luật
        Tâm lý
        Quan hệ công chúng
        Nghiên cứu tôn giáo
        Quản lý rủi ro và bảo hiểm
        Công tác xã hội
        Xã hội học
        Bệnh lý học ngôn ngữ nói
        Sân khấu, rạp hát
            """

        elif Labels[np.argmax(prediction)]=='ENTJ':
            jobs = """  
        Kế toán
        Quảng cáo
        Nhân loại học
        Ngành kiến ​​​​trúc
        Mỹ thuật
        Sinh học
        Quản trị kinh doanh
        Kinh doanh công nghệ thông tin
        Hoá học
        Hệ thống thông tin máy tính
        Quản lý xây dựng
        Tư pháp hình sự và tội phạm học
        Kinh tế (Kinh doanh)
        Giáo dục (Trung học)
        Tài chính
        Quản lý thực phẩm
        Quản lý khách sạn
        Quản trị nhân sự
        Kinh doanh quốc tế
        Báo chí
        Nghiên cứu pháp lý
        Marketing
        Khoa học chính trị
        Tiền nha khoa
        Tiền Luật
        Sơ cấp y tế
        Tâm lý
        Nghiên cứu tôn giáo
        Xã hội học
        Sân khấu, rạp hát
            """

        elif Labels[np.argmax(prediction)]=='ENTP':
            jobs = """
        Kế toán
        Ngành kiến ​​​​trúc
        Sinh học
        Quản trị kinh doanh
        Khoa học máy tính
        Hệ thống thông tin máy tính
        Quản lý xây dựng
        Tư pháp hình sự và tội phạm học
        Khoa học Trái đất / Không gian
        Giáo dục
        Tiếng Anh
        Khoa học Thể chất
        Tài chính
        Địa chất học
        Khoa học sức khỏe
        Ngành công nghiệp điện tử
        Hệ thống thông tin
        Báo chí
        Kiến trúc cảnh quan
        Nghiên cứu pháp lý
        Quản lý chuỗi cung ứng 
        Kỹ thuật y khoa
        Quản lý Tài nguyên và Môi trường
        Điều dưỡng
        Tiền nha khoa
        Tiền Luật
        Sơ cấp y tế
        Quản lý tài sản dân cư
        Quản lý rủi ro và bảo hiểm

            """

        elif Labels[np.argmax(prediction)]=='ESFJ':
            jobs = """
        Kế toán
        Đào tạo thể chất
        Quản trị kinh doanh
        Hoá học
        Chuyên gia về Đời sống Trẻ em
        Tư vấn Tâm lý
        Tư pháp hình sự và tội phạm học
        Dinh dưỡng
        Giáo dục
        Khoa học Thể chất
        Nghiên cứu gia đình
        Tài chính
        Quản lý thực phẩm
        Khoa học sức khỏe
        Quản lý khách sạn
        Nghiên cứu pháp lý
        Quản lý chuỗi cung ứng
        Marketing
        Kỹ thuật y khoa
        Những ngôn ngữ hiện đại
        Quản lý Tài nguyên và Môi trường
        Điều dưỡng
        Giáo dục thể chất
        Tiền nha khoa
        Tiền Luật
        Sơ cấp y tế
        Tâm lý
        Quan hệ công chúng
        Nghiên cứu tôn giáo
        Quản lý tài sản dân cư
        Quản lý rủi ro và bảo hiểm
        Công tác xã hội
        Bệnh lý ngôn ngữ nói
        Sân khấu, rạp hát
            
            """

        elif Labels[np.argmax(prediction)]=='ESFP':
            jobs = """
        Mỹ thuật
        Đào tạo thể chất
        Chuyên gia về Đời sống Trẻ em
        Tư vấn Tâm lý
        Tư pháp hình sự và tội phạm học
        Màn trình diễn khiêu vũ
        Dinh dưỡng
        Giáo dục
        Khoa học Thể chất
        Nghiên cứu gia đình
        Quản lý thực phẩm
        Địa chất học
        Khoa học sức khỏe
        Quản lý khách sạn
        Quản trị nhân sự
        Thiết kế nội thất
        Kiến trúc cảnh quan
        Nghiên cứu pháp lý
        Logistic và quản lý chuỗi cung ứng
        Phương tiện truyền thông
        Âm nhạc
        Quản lý Tài nguyên và Môi trường
        Điều dưỡng
        Giáo dục thể chất
        Khoa học chính trị
        Tiền nha khoa
        Tiền Luật
        Sơ cấp y tế
        Tâm lý
        Quan hệ công chúng
        Quản lý rủi ro và bảo hiểm
        Công tác xã hội
        Xã hội học
        Bệnh lý ngôn ngữ nói
        Sân khấu, rạp hát

            
            """
        elif Labels[np.argmax(prediction)]=='ESTJ':
            jobs = """
        Kế toán
        Khoa học tính toán bảo hiểm
        Đào tạo thể chất
        Quản trị kinh doanh
        Kinh doanh công nghệ thông tin
        Quản lý xây dựng
        Tư pháp hình sự và tội phạm học
        Tài chính
        Quản lý thực phẩm
        Quản lý khách sạn
        Ngành công nghiệp điện tử
        Nghiên cứu pháp lý
        Công nghệ kỹ thuật cơ khí
        Công nghiệp và sản xuất truyền thông âm nhạc
        Khoa học chính trị
        Tiền nha khoa
        Sơ cấp y tế
        Quan hệ công chúng
        Nghiên cứu tôn giáo
        Quản lý tài sản dân cư
        Quản lý rủi ro và bảo hiểm
        Giáo dục trung học
        Công tác xã hội

            
            """
        elif Labels[np.argmax(prediction)]=='ESTP':
            jobs = """
        Mỹ thuật
        Đào tạo thể chất
        Sinh học
        Khoa học máy tính
        Hệ thống thông tin máy tính
        Quản lý xây dựng
        Tư pháp hình sự và tội phạm học
        Màn trình diễn khiêu vũ
        Giáo dục (Khu vực công nghiệp / kỹ thuật)
        Quản lý doanh nhân
        khoa học Thể chất
        Tài chính
        Quản lý thực phẩm
        Ngành công nghiệp điện tử
        Hệ thống thông tin
        Báo chí
        Kiến trúc cảnh quan
        Marketing
        Công nghệ kỹ thuật cơ khí
        Phương tiện truyền thông
        Kỹ thuật y khoa
        Âm nhạc
        Quản lý Tài nguyên và Môi trường
        Sơ cấp y tế
        Quản lý tài sản dân cư
        Quản lý rủi ro và bảo hiểm
        Viễn thông
        Sân khấu, rạp hát
        
            """
        elif Labels[np.argmax(prediction)]=='INFJ':
            jobs = """
        Quảng cáo
        Ngành kiến ​​​​trúc
        Mỹ thuật
        Đào tạo thể chất
        Nghiên cứu truyền thông
        Tư vấn Tâm lý
        Tư pháp hình sự và tội phạm học
        Màn trình diễn khiêu vũ
        Dinh dưỡng
        Giáo dục
        Tiếng Anh
        Thiết kế môi trường
        Khoa học Thể chất
        Nghiên cứu gia đình
        Nghiên cứu ngành thời trang
        Quản lý nghệ thuật đồ họa
        Khoa học dinh dưỡng và sức khỏe
        Lịch sử
        Quản trị nhân sự
        Thiết kế nội thất
        Báo chí
        Kiến trúc cảnh quan
        Nghiên cứu Mỹ Latinh
        Nghiên cứu pháp lý
        Marketing
        Kỹ thuật y khoa
        Phương tiện truyền thông
        Công nghiệp và sản xuất truyền thông âm nhạc
        Quản lý Tài nguyên và Môi trường
        Điều dưỡng
        Giáo dục sức khỏe và thể chất
        Tiền nha khoa
        Tiền Luật
        Sơ cấp y tế
        Tâm lý
        Quan hệ công chúng
        Nghiên cứu tôn giáo
        Công tác xã hội
        Xã hội học
        Bệnh lý ngôn ngữ nói
        Sân khấu, rạp hát
        Quy hoạch và Phát triển Đô thị
            
            """
        elif Labels[np.argmax(prediction)]=='INFP':
            jobs = """
        Thiết kế trang phục
        Ngành kiến ​​​​trúc
        Mỹ thuật
        Đào tạo thể chất
        Sinh học
        Quản trị kinh doanh
        Tư vấn Tâm lý
        Dinh dưỡng
        Giáo dục
        Tiếng Anh
        Nghiên cứu gia đình
        Kinh doanh thời trang
        Quản lý nghệ thuật đồ họa
        Lịch sử
        Quản trị nhân sự
        Thiết kế nội thất
        Báo chí 
        Kiến trúc cảnh quan
        Nghiên cứu pháp lý
        Kỹ thuật y khoa
        Những ngôn ngữ hiện đại
        Âm nhạc
        Điều dưỡng
        Triết học
        Tiền Luật
        Tâm lý
        Nghiên cứu tôn giáo
        Công tác xã hội
        Xã hội học
        Bệnh lý ngôn ngữ nói
        Sân khấu, rạp hát
        
            """
        elif Labels[np.argmax(prediction)]=='INTJ':
            jobs = """
        Ngành kiến ​​​​trúc
        Mỹ thuật
        Hóa sinh
        Sinh học
        Quản trị kinh doanh
        Hoá học
        Nghiên cứu truyền thông
        Hệ thống thông tin máy tính
        Quản lý xây dựng
        Tư vấn Tâm lý
        Tư pháp hình sự và tội phạm học
        Khoa học Trái đất
        Kinh tế học
        Giáo dục
        Thiết kế môi trường
        Khoa học Thể chất
        Tài chính
        Địa chất học
        Quản lý nghệ thuật đồ họa
        Khoa học sức khỏe
        Quản trị nhân sự
        Thiết kế nội thất
        Kinh doanh quốc tế
        Báo chí
        Kiến trúc cảnh quan
        Nghiên cứu pháp lý
        Toán kinh tế
        Khoa học toán học
        Sư phạm toán
        Kỹ thuật y khoa
        Phương tiện truyền thông
        Công nghiệp và sản xuất truyền thông âm nhạc
        Quản lý Tài nguyên và Môi trường
        Quản lý chuỗi cung ứng
        Vật lý
        Tiền nha khoa
        Sơ cấp y tế
        Tâm lý
        Nghiên cứu tôn giáo
        Xã hội học
        Quy hoạch và Phát triển Đô thị
            
            """
        elif Labels[np.argmax(prediction)]=='INTP':
            jobs = """
        Nhân loại học
        Ngành kiến ​​​​trúc
        Mỹ thuật
        Hóa sinh
        Sinh học
        Quản trị kinh doanh
        Kinh doanh công nghệ thông tin
        Hoá học
        Nghiên cứu truyền thông
        Hệ thống thông tin máy tính
        Tư vấn Tâm lý
        Tư pháp hình sự và tội phạm học
        Màn trình diễn khiêu vũ
        Kinh tế học
        Quản lý doanh nhân
        Thiết kế môi trường
        Quy hoạch đô thị
        Tài chính
        Quản lý nghệ thuật đồ họa
        Lịch sử
        Báo chí
        Kiến trúc cảnh quan
        Nghiên cứu pháp lý
        Quản lý chuỗi cung ứng
        Ban quản lý
        Toán kinh tế
        Khoa học toán học
        Kỹ thuật y khoa
        Phương tiện truyền thông
        Những ngôn ngữ hiện đại
        Âm nhạc
        Quản lý Tài nguyên và Môi trường
        Triết học
        Vật lý
        Tiền Luật
        Sơ cấp y tế
        Tâm lý
        Xã hội học
        Sân khấu, rạp hát
            
            """
        elif Labels[np.argmax(prediction)]=='ISFP':
            jobs = """
        Thiết kế trang phục
        Mỹ thuật
        Đào tạo thể chất
        Sinh học
        Khoa học máy tính
        Tư pháp hình sự và tội phạm học
        Màn trình diễn khiêu vũ
        Dinh dưỡng
        Giáo dục
        Thiết kế môi trường
        Khoa học Thể chất
        Quản lý thực phẩm
        Địa chất học
        Khoa học sức khỏe
        Lịch sử
        Thiết kế nội thất
        Kiến trúc cảnh quan
        Nghiên cứu pháp lý
        Kỹ thuật y khoa
        Những ngôn ngữ hiện đại
        Công nghiệp và sản xuất truyền thông âm nhạc
        Quản lý Tài nguyên và Môi trường
        Điều dưỡng
        Giáo dục thể chất
        Tiền nha khoa
        Tiền Luật
        Sơ cấp y tế
        Quan hệ công chúng
        Quản lý rủi ro và bảo hiểm
        Công tác xã hội
        Bệnh lý ngôn ngữ nói
            
            """
        elif Labels[np.argmax(prediction)]=='ISTJ':
            jobs = """
        Kế toán
        Ngành kiến ​​​​trúc
        Sinh học
        Quản trị kinh doanh
        Khoa học máy tính
        Hệ thống thông tin máy tính
        Quản lý xây dựng
        Tư pháp hình sự và tội phạm học
        Khoa học Trái đất
        Giáo dục
        Tiếng Anh
        Khoa học Thể chất
        Tài chính
        Địa chất học
        Khoa học sức khỏe
        Hệ thống thông tin
        Báo chí
        Kiến trúc cảnh quan
        Nghiên cứu pháp lý
        Quản lý chuỗi cung ứng
        Kỹ thuật y khoa
        Quản lý Tài nguyên và Môi trường
        Điều dưỡng
        Tiền nha khoa
        Tiền Luật
        Sơ cấp y tế
        Quản lý tài sản dân cư
        Quản lý rủi ro và bảo hiểm
            
            """
        elif Labels[np.argmax(prediction)]=='ISTP':
            jobs = """
    Mỹ thuật
    Đào tạo thể chất
    Sinh học
    Quản trị kinh doanh
    Kinh doanh công nghệ thông tin
    Hệ thống thông tin máy tính
    Khoa học máy tính
    Quản lý xây dựng
    Tư pháp hình sự và tội phạm học
    Kinh tế học
    Khoa học Thể chất
    Tài chính
    Địa chất học
    Khoa học sức khỏe
    Ngành công nghiệp điện tử
    Kiến trúc cảnh quan
    Nghiên cứu pháp lý
    Quản lý chuỗi cung ứng
    Công nghệ kỹ thuật sản xuất
    Công nghệ kỹ thuật cơ khí
    Khoa học toán học
    Kỹ thuật y khoa
    Phương tiện truyền thông
    Quản lý Tài nguyên và Môi trường
    Giáo dục thể chất
    Tiền nha khoa
    Tiền Luật
    Sơ cấp y tế
    Quản lý rủi ro và bảo hiểm
    Sân khấu, rạp hát
        """
        return jobs
    jobs = predictor(result)
    return render_template('result.html', prediction_text= 'Your personality type should be {}'.format(result), jobs=jobs)
    




if __name__ == "__main__":
    app.run(host='0.0.0.0', port=7500, debug=True)  # use another(8000)