#if UNITY_EDITOR
using UnityEngine;
using UnityEditor;
using System.IO;
using System.Text.RegularExpressions;

public class AssetNameChecker
{
    [MenuItem("Tools/Kiểm Tra Tên Asset Lỗi")]
    public static void CheckNames()
    {
        // Lấy đường dẫn của tất cả các asset trong dự án
        string[] allPaths = AssetDatabase.GetAllAssetPaths();
        int issueCount = 0;

        char[] invalidFileNameChars = Path.GetInvalidFileNameChars();

        foreach (string path in allPaths)
        {
            // Bỏ qua các file mặc định của Unity Packages để tiết kiệm thời gian
            if (path.StartsWith("Packages/")) continue; 

            string fileName = Path.GetFileNameWithoutExtension(path);
            string fullFileName = Path.GetFileName(path);
            bool hasIssue = false;
            string issueReason = "";

            // 1. Kiểm tra các ký tự không hợp lệ của hệ điều hành
            foreach (char c in invalidFileNameChars)
            {
                if (fullFileName.Contains(c.ToString()))
                {
                    hasIssue = true;
                    issueReason += $"Chứa ký tự lỗi hệ thống: '{c}' (Mã: {(int)c}). ";
                }
            }

            // 2. Kiểm tra ký tự ẩn, xuống dòng (thường do copy-paste nhầm)
            if (fullFileName.Contains("\n") || fullFileName.Contains("\r"))
            {
                hasIssue = true;
                issueReason += "Chứa ký tự xuống dòng (Enter/Newline). ";
            }

            // 3. Kiểm tra khoảng trắng ở đầu hoặc cuối tên tệp (bỏ qua extension)
            if (fileName.StartsWith(" ") || fileName.EndsWith(" "))
            {
                hasIssue = true;
                issueReason += "Chứa khoảng trắng ở đầu hoặc cuối. ";
            }

            // 4. Kiểm tra các ký tự zero-width (lỗi tàng hình)
            if (Regex.IsMatch(fullFileName, @"[\u200B-\u200D\uFEFF]"))
            {
                hasIssue = true;
                issueReason += "Chứa ký tự ẩn (zero-width). ";
            }

            if (hasIssue)
            {
                Object asset = AssetDatabase.LoadMainAssetAtPath(path);
                Debug.LogError($"[Ký tự lạ] Lỗi ở file: {path}\nNguyên nhân: {issueReason}", asset);
                issueCount++;
            }
        }

        if (issueCount == 0)
            Debug.Log("<color=green>Hoàn tất quét! Không tìm thấy tên Asset nào chứa ký tự lạ.</color>");
        else
            Debug.LogError($"<color=red>Hoàn tất quét! Phát hiện {issueCount} file có tên chứa ký tự lỗi. Hãy nhấp vào thông báo này để tìm file và đổi tên chúng!</color>");
    }
}
#endif