import React, { useContext, useRef } from "react";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { SendIcon } from "lucide-react";
import { ChatContext } from "./ChatContext";

interface IChatInputProps {
  isDisabled?: boolean;
}

const ChatInput = ({ isDisabled }: IChatInputProps) => {
  const { addMessage, handleInputChange, isLoading, message } =
    useContext(ChatContext);

  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  return (
    <div className="absolute bottom-0 left-0 w-full">
      <div className="mx-2 flex flex-row gap-3 md:mx-4 md:last:mb-6 lg:mx-auto lg:max-w-2xl xl:max-w-3xl">
        <div className="relative flex h-full flex-1 items-stretch md:flex-col  ">
          <div className="relative flex flex-col w-full grow p-4">
            <div className="relative">
              <Textarea
                ref={textAreaRef}
                autoFocus
                placeholder="Enter your question..."
                rows={1}
                maxRows={4}
                className="resize-none pr-12 text-base py-3 scrollbar-thumb-rounded scrollbar-track-red-ligter scrollbar-w-2 scrolling-touch scrollbar-thumb-red"
                onChange={handleInputChange}
                value={message}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    addMessage();
                    textAreaRef.current?.focus();
                  }
                }}
              />
              <Button
                disabled={isLoading || isDisabled}
                className="absolute bottom-[5px] right-[8px]"
                aria-label="send message"
                // type="submit"
                onClick={() => {
                  addMessage();
                  textAreaRef.current?.focus();
                }}
              >
                <SendIcon className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatInput;
