Some components were added in the project
.
.
.
.
- Button component {

    Description: Add a green button in your JSX File.
    Import: import GreenButton from '../stylingComponents/buttons/greenButton';
    Usage: <div className = "Testing"> <GreenButton name="Button text here" size="small,medium or large"  > </GreenButton> </div>
}
.
- Title component {

    Description: Add a heading (Big title) in your JSX File.
    Import: import TextTitle from '../stylingComponents/Texts/Title.js';
    Usage: <div className = "Testing"> 
                <TextTitle name="Write your sentence here" 
                           colour="color here ie: white or #fff" 
                           fontSize="font size here ie : 16pt" > 
                </TextTitle> 
            </div>

}
.
- Paragraph component {

    Description: Add a paragraph in your JSX File.
    Import: import Paragraph from '../stylingComponents/Texts/Paragraph.js';
    Usage: <div className = "Testing"> 
                <TextP name="Write your paragraph here" 
                           colour="color here ie: white or #fff" 
                           fontSize="font size here ie : 16pt" > 
                </TextP> 
            </div>

}
.
    General Notes: 
        If you want to play around with the margins and the position, edit the CSS code of the className "Testing" of the parent <div>
        You can check some implementations in landing.js and qa.js
        Handle the code with care and push your project if you are 100% sure that it works like a charm :D
.
.
.
.
</GREENTECH> 