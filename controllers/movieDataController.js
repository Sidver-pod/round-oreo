const MovieName = require('../models/movieName');
const ShowTime = require('../models/showTime');

exports.getMovieData = async (req, res) => {
    try {
        /* performing inner-join */
        const result = await MovieName.findAll({
            include: {
                model: ShowTime,
                required: true
            }
        });

        const newResult = result.map(data => data.dataValues); // rearranging data

        res.json({ result: newResult });
    }
    catch(err) {
        console.error(err);
        res.sendStatus(500);
    }
}