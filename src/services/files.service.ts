import fs from 'fs';

class FileService {
  public saveFileById(id: string | number, body) {
    if (!fs.existsSync(`${__dirname}/data`)) {
      fs.mkdirSync(`${__dirname}/data`);
    }
    fs.writeFile(`${__dirname}/data/${id}.json`, JSON.stringify(body), err => {
      if (err) throw err;
      return body;
    });
  }

  public getFileById(id) {
    const data = fs.readFileSync(`${__dirname}/data/${id}.json`);
    if (!data) throw new Error(`Data with ${id} not found`);
    return data;
  }
}

export default FileService;
