const bodyParser = require('body-parser')
const express = require("express")
const app = express()
const server = require('http').Server(app)
const request = require('request')
var log_access = []
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: false
}))
app.get('/', (req, res) => {
    res.send("WebApp Server Cron Trung Gian Node.js By Nguy?n Duy Tuyên (0974097353)")
})
app.get('/MaxSkillKing', (req, res) => {
    res.send("Nguyễn Duy Tuyên (0974097353)")
})
app.get('/MaxTypes', (req, res) => {
    res.send("'MaxVIPLike' => 'VIP Like',
    'MaxVIPR' => 'VIP Cảm Xúc Có Random',
    'MaxVIPCX' => 'VIP Cảm Xúc Được Tuỳ Chọn',
    'MaxVIPCMT' => 'VIP CMT',
    'MaxVIPBotTK' => 'VIP BOT',
    'MSK' => 'Sub',
    'MaxVIPAddFr' => 'Kết Bạn',
    'MaxVIPSr' => 'VIP Share'")
})
app.get('/MaxShowToken', (req, res) => {
    res.json(log_access)
})
app.get('/MaxDelToken', (req, res) => {
    log_access = []
    res.send("Delete Success")
})
app.post('/MaxVIPLike', (req, res) => {
    for (var a = 0; a < req.body.access_token.length; a++) {
        ! function(a) {
            setTimeout(function() {
                MaxVIPLike(req.body.id, req.body.access_token[a])
            }, a * req.body.time_delay)
        }
        (a)
    }
    res.json({
        status: 200,
        type: 'MaxVIPLike',
        fbid: req.body.id,
        total_access_token: req.body.access_token.length,
        time_delay: req.body.time_delay,
        developer: 'MaxSkillKing'
    })
})
app.post('/MaxVIPR', (req, res) => {
    for (var a = 0; a < req.body.access_token.length; a++) {
        ! function(a) {
            setTimeout(function() {
                MaxVIPR(req.body.typeReact, req.body.id, req.body.access_token[a])
            }, a * req.body.time_delay)
        }
        (a)
    }
    res.json({
        status: 200,
        type: 'MaxVIPR',
        type_reaction: req.body.typeReact,
        fbid: req.body.id,
        total_access_token: req.body.access_token.length,
        time_delay: req.body.time_delay,
        developer: 'MaxSkillKing'
    })
})
app.post('/MaxVIPCX', (req, res) => {
    for (var a = 0; a < req.body.access_token.length; a++) {
        ! function(a) {
            setTimeout(function() {
                MaxVIPCX(req.body.typeReact, req.body.id, req.body.access_token[a])
            }, a * req.body.time_delay)
        }
        (a)
    }
    res.json({
        status: 200,
        type: 'MaxVIPCX',
        type_reaction: req.body.typeReact,
        fbid: req.body.id,
        total_access_token: req.body.access_token.length,
        time_delay: req.body.time_delay,
        developer: 'MaxSkillKing'
    })
})
app.post('/MaxVIPCMT', (req, res) => {
    for (var a = 0; a < req.body.access_token.length; a++) {
        ! function(a) {
            setTimeout(function() {
                MaxVIPCMT(req.body.id, req.body.arr_message[a], req.body.access_token[a])
            }, a * req.body.time_delay)
        }
        (a)
    }
    res.json({
        status: 200,
        type: 'MaxVIPCMT',
        fbid: req.body.id,
        total_access_token: req.body.access_token.length,
        time_delay: req.body.time_delay,
        developer: 'MaxSkillKing'
    })
})
app.post('/MaxVIPBotTK', (req, res) => {
    var typeReact = req.body.typeReact
    for (var a = 0; a < req.body.arrPostID.length; a++) {
        ! function(a, typeReact) {
            setTimeout(function() {
                MaxVIPR(typeReact, req.body.arrPostID[a], req.body.access_token)
            }, a * req.body.time_delay)
        }
        (a, typeReact)
    }
    res.json({
        status: 200,
        type: 'MaxVIPBotTK',
        type_reaction: req.body.typeReact,
        post_id: req.body.arrPostID,
        total_post_id: req.body.arrPostID.length,
        time_delay: req.body.time_delay,
        developer: 'MaxSkillKing'
    })
})
app.post('/MSK', (req, res) => {
    for (var a = 0; a < req.body.access_token.length; a++) {
            ! function(a) {
                setTimeout(function() {
                    MSK(req.body.id, req.body.access_token[a])
                }, a * req.body.time_delay)
            }
            (a)
    }
    res.json({
        status: 200,
        type: 'MSK',
        fbid: req.body.id,
        total_access_token: req.body.access_token.length,
        time_delay: req.body.time_delay,
        developer: 'MaxSkillKing'
    })
})
app.post('/MaxVIPAddFr', (req, res) => {
    for (var a = 0; a < req.body.access_token.length; a++) {
        ! function(a) {
            setTimeout(function() {
                MaxVIPAddFr(req.body.id, req.body.access_token[a])
            }, a * req.body.time_delay)
        }
        (a)
    }
    res.json({
        status: 200,
        type: 'MaxVIPAddFr',
        fbid: req.body.id,
        total_access_token: req.body.access_token.length,
        time_delay: req.body.time_delay,
        developer: 'MaxSkillKing'
    })
})
app.post('/MaxVIPSr', (req, res) => {
    for (var a = 0; a < req.body.access_token.length; a++) {
        ! function(a) {
            setTimeout(function() {
                MaxVIPSr(req.body.id, req.body.access_token[a])
            }, a * req.body.time_delay)
        }
        (a)
    }
    res.json({
        status: 200,
        type: 'MaxVIPSr',
        fbid: req.body.id,
        total_access_token: req.body.access_token.length,
        time_delay: req.body.time_delay,
        developer: 'MaxSkillKing'
    })
})

function MaxVIPLike(MaxID, MaxToken) {
    request('https://graph.fb.me/' + MaxID + '/likes?method=post&access_token=' + MaxToken, (error, response, body) => {
        console.log(body)
    })
}

function MaxVIPR(MaxReact, MaxID, MaxToken) {
    if (MaxReact == 'MaxRand') {
        var arrReact = ['LIKE', 'LOVE', 'HAHA', 'WOW', 'SAD', 'ANGRY']
        MaxReact = arrReact[Math.floor(Math.random() * arrReact.length)]
    }
    request('https://graph.fb.me/' + MaxID + '/reactions?method=post&access_token=' + MaxToken + '&type=' + MaxReact, (error, response, body) => {
        console.log(body)
    })
}

function MaxVIPCX(MaxReact, MaxID, MaxToken) {
    if (MaxReact.length > 1) {
        var MaxVIPReact = MaxReact[Math.floor(Math.random() * MaxReact.length)]
    } else {
        var MaxVIPReact = MaxReact
    }
    request('https://graph.fb.me/' + MaxID + '/reactions?method=post&access_token=' + MaxToken + '&type=' + MaxVIPReact, (error, response, body) => {
        console.log(body)
    })
}

function MaxVIPCMT(MaxID, MaxCMT, MaxToken){
    request('https://graph.fb.me/' + MaxID + '/comments?method=post&message=' + encodeURI(MaxCMT) + '&access_token=' + MaxToken, (error, response, body) => {
        console.log(body)
    })
}

function MSK(MaxID, MaxToken) {
    request('https://graph.fb.me/' + MaxID + '/subscribers?method=post&access_token=' + MaxToken, (error, response, body) => {
        console.log(body)
    })
}

function AutoAddFriend(MaxID, MaxToken) {
    request('https://graph.fb.me/me/friends?uid=' + MaxID + '&method=post&access_token=' + MaxToken, (error, response, body) => {
        console.log(body)
    })
}

function MaxVIPSr(MaxID, MaxToken) {
    request('https://graph.fb.me/' + MaxID + '/sharedposts?method=post&access_token=' + MaxToken, (error, response, body) => {
        console.log(body)
    })
}
function in_array(needle, haystack){
    return haystack.indexOf(needle) !== -1;
}
var port = process.env.PORT || 8080,
    ip   = process.env.IP   || '0.0.0.0';
app.listen(port, ip);
console.log('Server running on http://%s:%s', ip, port);
