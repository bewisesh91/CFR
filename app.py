from crypt import methods
from flask import Flask, render_template, request, jsonify, json
from pymongo import MongoClient
from datetime import datetime

app = Flask(__name__)
client = MongoClient('localhost', 27017)
db = client.CFR


# 시작 페이지
@app.route('/')
def home():
    total_results = list(db.CFR.find(
        {}, {'_id': False, 'Kakao_ID': False, 'created_at': False}))

    total_CLT_average_N, total_FLT_average_N, total_RLT_average_N = 0, 0, 0
    total_CLT_average_Nu, total_FLT_average_Nu, total_RLT_average_Nu = 0, 0, 0
    total_CLT_average_P, total_FLT_average_P, total_RLT_average_P = 0, 0, 0

    total_list = [[] for _ in range(35)]
    total_CLT_list = [[] for _ in range(15)]
    total_FLT_list = [[] for _ in range(10)]
    total_RLT_list = [[] for _ in range(10)]

    for results in total_results:
        is_updated = results['updated_at']
        if is_updated:
            for i in range(35):
                total_list[i].append(results['total_result'][-1][i])
        else:
            for i in range(35):
                total_list[i].append(results['total_result'][i])

    total_CLT_set, total_FLT_set, total_RLT_set = len(
        total_results) * 15, len(total_results) * 10, len(total_results) * 10
    CLT_average_P = int(total_CLT_average_P / total_CLT_set * 100)
    FLT_average_P = int(total_FLT_average_P / total_FLT_set * 100)
    RLT_average_P = int(total_RLT_average_P / total_RLT_set * 100)

    # print(total_list)

    for i in range(15):
        negative, nutural, positive = 0, 0, 0
        negative += total_list[:15][i].count(1)
        negative += total_list[:15][i].count(2)
        nutural += total_list[:15][i].count(3)
        positive += total_list[:15][i].count(4)
        positive += total_list[:15][i].count(5)
        total_CLT_list[i].append(negative/len(total_results))
        total_CLT_list[i].append(nutural/len(total_results))
        total_CLT_list[i].append(positive/len(total_results))

    for i in range(10):
        negative, nutural, positive = 0, 0, 0
        negative += total_list[15:25][i].count(1)
        negative += total_list[15:25][i].count(2)
        nutural += total_list[15:25][i].count(3)
        positive += total_list[15:25][i].count(4)
        positive += total_list[15:25][i].count(5)
        total_FLT_list[i].append(negative/len(total_results))
        total_FLT_list[i].append(nutural/len(total_results))
        total_FLT_list[i].append(positive/len(total_results))

    for i in range(10):
        negative, nutural, positive = 0, 0, 0
        negative += total_list[25:][i].count(1)
        negative += total_list[25:][i].count(2)
        nutural += total_list[25:][i].count(3)
        positive += total_list[25:][i].count(4)
        positive += total_list[25:][i].count(5)
        total_RLT_list[i].append(negative/len(total_results))
        total_RLT_list[i].append(nutural/len(total_results))
        total_RLT_list[i].append(positive/len(total_results))

    print(total_CLT_list)
    print(total_FLT_list)
    print(total_RLT_list)

    return render_template('index.html')

# 문항 페이지


@app.route('/check', methods=['POST'])
def check():
    return render_template('index.html')


# 결과 페이지
@app.route('/result', methods=['POST'])
def result():
    Kakao_ID = request.form['Kakao_ID']
    total_result = request.form['total_result']
    CLT_result = request.form['CLT_result']
    FLT_result = request.form['FLT_result']
    RLT_result = request.form['RLT_result']

    total_result = json.loads(total_result)['total_result']
    CLT_result = json.loads(CLT_result)['CLT_result']
    FLT_result = json.loads(FLT_result)['FLT_result']
    RLT_result = json.loads(RLT_result)['RLT_result']

    # print(Kakao_ID)
    # print(total_result)
    # print(json.loads(CLT_result)['CLT_result'])
    # print(json.loads(FLT_result)['FLT_result'])
    # print(json.loads(RLT_result)['RLT_result'])

    is_not_first_time = db.CFR.find_one({'Kakao_ID': Kakao_ID})
    if is_not_first_time:
        new_total_result = [is_not_first_time['total_result']]
        new_total_result.append(total_result)
        db.CFR.update_one({'Kakao_ID': Kakao_ID},
                          {'$set': {'total_result': new_total_result,
                                    'updated_at': datetime.now()}}
                          )
    else:
        data = {
            'Kakao_ID': Kakao_ID,
            'total_result': total_result,
            'created_at': datetime.now(),
            'updated_at': None
        }
        db.CFR.insert_one(data)

    total_results = list(db.CFR.find(
        {}, {'_id': False, 'Kakao_ID': False, 'created_at': False}))

    total_CLT_average_N, total_FLT_average_N, total_RLT_average_N = 0, 0, 0
    total_CLT_average_Nu, total_FLT_average_Nu, total_RLT_average_Nu = 0, 0, 0
    total_CLT_average_P, total_FLT_average_P, total_RLT_average_P = 0, 0, 0
    total_list = [[] for _ in range(35)]
    total_CLT_list = [[] for _ in range(15)]
    total_FLT_list = [[] for _ in range(10)]
    total_RLT_list = [[] for _ in range(10)]

    for results in total_results:
        is_updated = results['updated_at']
        if is_updated:
            for i in range(35):
                total_list[i].append(results['total_result'][-1][i])
            total_CLT_average_N += results['total_result'][-1][:15].count(1)
            total_CLT_average_N += results['total_result'][-1][:15].count(2)
            total_FLT_average_N += results['total_result'][-1][15:25].count(1)
            total_FLT_average_N += results['total_result'][-1][15:25].count(2)
            total_RLT_average_N += results['total_result'][-1][25:].count(1)
            total_RLT_average_N += results['total_result'][-1][25:].count(2)

            total_CLT_average_Nu += results['total_result'][-1][:15].count(3)
            total_FLT_average_Nu += results['total_result'][-1][15:25].count(3)
            total_RLT_average_Nu += results['total_result'][-1][25:].count(3)

            total_CLT_average_P += results['total_result'][-1][:15].count(4)
            total_CLT_average_P += results['total_result'][-1][:15].count(5)
            total_FLT_average_P += results['total_result'][-1][15:25].count(4)
            total_FLT_average_P += results['total_result'][-1][15:25].count(5)
            total_RLT_average_P += results['total_result'][-1][25:].count(4)
            total_RLT_average_P += results['total_result'][-1][25:].count(5)

        else:
            for i in range(35):
                total_list[i].append(results['total_result'][i])
            total_CLT_average_N += results['total_result'][:15].count(1)
            total_CLT_average_N += results['total_result'][:15].count(2)
            total_FLT_average_N += results['total_result'][15:25].count(1)
            total_FLT_average_N += results['total_result'][15:25].count(2)
            total_RLT_average_N += results['total_result'][25:].count(1)
            total_RLT_average_N += results['total_result'][25:].count(2)

            total_CLT_average_Nu += results['total_result'][:15].count(3)
            total_FLT_average_Nu += results['total_result'][15:25].count(3)
            total_RLT_average_Nu += results['total_result'][25:].count(3)

            total_CLT_average_P += results['total_result'][:15].count(4)
            total_CLT_average_P += results['total_result'][:15].count(5)
            total_FLT_average_P += results['total_result'][15:25].count(4)
            total_FLT_average_P += results['total_result'][15:25].count(5)
            total_RLT_average_P += results['total_result'][25:].count(4)
            total_RLT_average_P += results['total_result'][25:].count(5)

    total_CLT_set, total_FLT_set, total_RLT_set = len(
        total_results) * 15, len(total_results) * 10, len(total_results) * 10
    CLT_average_P = int(total_CLT_average_P / total_CLT_set * 100)
    FLT_average_P = int(total_FLT_average_P / total_FLT_set * 100)
    RLT_average_P = int(total_RLT_average_P / total_RLT_set * 100)

    for i in range(15):
        negative, nutural, positive = 0, 0, 0
        negative += total_list[:15][i].count(1)
        negative += total_list[:15][i].count(2)
        nutural += total_list[:15][i].count(3)
        positive += total_list[:15][i].count(4)
        positive += total_list[:15][i].count(5)
        total_CLT_list[i].append(negative/len(total_results))
        total_CLT_list[i].append(nutural/len(total_results))
        total_CLT_list[i].append(positive/len(total_results))

    for i in range(10):
        negative, nutural, positive = 0, 0, 0
        negative += total_list[15:25][i].count(1)
        negative += total_list[15:25][i].count(2)
        nutural += total_list[15:25][i].count(3)
        positive += total_list[15:25][i].count(4)
        positive += total_list[15:25][i].count(5)
        total_FLT_list[i].append(negative/len(total_results))
        total_FLT_list[i].append(nutural/len(total_results))
        total_FLT_list[i].append(positive/len(total_results))

    for i in range(10):
        negative, nutural, positive = 0, 0, 0
        negative += total_list[25:][i].count(1)
        negative += total_list[25:][i].count(2)
        nutural += total_list[25:][i].count(3)
        positive += total_list[25:][i].count(4)
        positive += total_list[25:][i].count(5)
        total_RLT_list[i].append(negative/len(total_results))
        total_RLT_list[i].append(nutural/len(total_results))
        total_RLT_list[i].append(positive/len(total_results))

    return (jsonify({'total_number': len(total_results), 'CLT_average_P': CLT_average_P, 'FLT_average_P': FLT_average_P, 'RLT_average_P': RLT_average_P, 'total_CLT_list': total_CLT_list, 'total_FLT_list': total_FLT_list, 'total_RLT_list': total_RLT_list}))


if __name__ == '__main__':
    app.run('127.0.0.1', port=3000, debug=True)
